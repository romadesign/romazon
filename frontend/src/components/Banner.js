import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
    return (
        <div className="relative">
            <div className="" />
            <Carousel
            autoPlay
            infiniteLoop    
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval0={500}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/CruelSummerS1/CRSM_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_es-ES._CB645506004_.jpg" alt="/" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON-FASHION/2020/FASHION/PROMO/AW20EOSS_SALE/GW_LAST-DAYS/GW_HERO_DESK_3000x1200._CB413316717_.jpg" alt="/" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/AmazonMusic/2021/WeeklyBuild/061821/061821_ES_HitsDelVerano2021_GW_Hero_D_3000x1200._CB666546419_.jpg" alt="/" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON-FASHION/2021/PRIVATE_LABEL/SS2021/GW_DESKTOP_HERO_3000X1200._CB664113247_.jpg" alt="/" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner