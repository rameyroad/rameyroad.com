"use client";

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Images.scss";

type ImageParams = {
    imageId: string;
};

export const Images = () => {
    const { imageId } = useParams<ImageParams>();

    const [pageNumber, setPageNumber] = useState<number>(1);
    const [picLimit, setPicLimit] = useState<number>(20);
    const [images, setImages] = useState<Array<any>>([]);

    const [grayscale, setGrayscale] = useState<boolean>(false);
    const [blurValue, setBlurValue] = useState<number>(0);

    let data = Array.from({ length: 500 }, (_, index) => index + 1);

    useEffect(() => {
        if (pageNumber < 1) {
            setPageNumber(1);
        } else {
            fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${picLimit}`)
                .then((response) => {
                    response.json().then((data) => {
                        setImages(data);
                    });
                })
                .catch((error) => {})
                .finally(() => {});
        }
    }, [pageNumber]);

    useEffect(() => {}, [imageId, grayscale, blurValue]);

    useEffect(() => {}, [images]);

    let imgUrl = "";
    if (blurValue <= 0) {
        imgUrl = grayscale
            ? `https://picsum.photos/id/${imageId}/1200/1024?grayscale`
            : `https://picsum.photos/id/${imageId}/1200/1024`;
    } else {
        imgUrl = grayscale
            ? `https://picsum.photos/id/${imageId}/1200/1024?grayscale&blur=${blurValue}`
            : `https://picsum.photos/id/${imageId}/1200/1024?blur=${blurValue}`;
    }

    return (
        <section id="images" className="fadeInUp">
            {imageId ? (
                <div className="container">
                    <img src={imgUrl} alt={`Image ${imageId}`} style={{}} />
                    <form>
                        <div className="row" style={{ marginTop: "15px" }}>
                            <div className="col-6">
                                <span style={{ marginRight: "5px" }}>
                                    <input
                                        type="checkbox"
                                        name="grayscale"
                                        value="grayscale"
                                        onChange={() => setGrayscale(!grayscale)}
                                    />
                                </span>
                                Grayscale
                            </div>
                            <div className="col-6">
                                Blur
                                <span style={{ marginLeft: "5px" }}>
                                    <input
                                        type="number"
                                        value={blurValue}
                                        min={0}
                                        max={10}
                                        onChange={(e) => setBlurValue(parseInt(e.target.value))}
                                    />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-right">
                            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                        </div>
                    </div>
                    <div className="row">
                        {images.length !== 0 &&
                            images.map((item, index) => {
                                let w = Math.floor(item.width * 0.9);
                                let h = Math.floor(item.height * 0.9);
                                return (
                                    <Fragment key={index}>
                                        <div className="col-6 col-sm-4 col-md-3 p-2">
                                            <a href={`/images/${item.id}`}>
                                                {/* <a href={item.download_url} target="_blank"> */}
                                                <img
                                                    key={`https://picsum.photos/id/${item.id}/${w}/${h}`}
                                                    src={item.download_url}
                                                    alt={`Image ${item.id}`}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    </Fragment>
                                );
                            })}
                    </div>
                    <div className="row">
                        <div className="col-6 text-right">
                            <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
