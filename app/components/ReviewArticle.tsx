import React from 'react'

function ReviewArticle() {
  return (
    <div className="reviews">
            <article className="reviews__review sm:w-[20rem] ml-auto">
              <div className="review__top">
                <img src="/google-testimonial.png" alt="Google" />
                <div className="top__stars ml-2">
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill_gray.svg" alt="" />
                </div>
              </div>
              <p className="review__author mt-2">Samantha Lee</p>
              <p className="review__quote mt-1">
                The checklist ensures that the review process is thorough
              </p>
            </article>
            <article className="reviews__review w-[20rem] mr-auto">
              <div className="review__top">
                <img src="/meta-testimonial.png" alt="Meta" />
                <div className="top__stars ml-2">
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                  <img src="/Star_fill.svg" alt="1 star" />
                </div>
              </div>
              <p className="review__author mt-2">Rachel Patel</p>
              <p className="review__quote mt-1">
                I highly recommend the Writecream Business Description
              </p>
            </article>
          </div>
  )
}

export default ReviewArticle