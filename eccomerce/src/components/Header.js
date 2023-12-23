import React from "react";
import TextField from "@mui/material/TextField";
import cetecIcon from "./pictures/2420d38cc351dfb8422cc19cf2924dfe.png";

export default function Header() {
  return (
    <header className="header">
      <div className="searchBoxContainer">
        <input
          type="text"
          style={{
            width: "29rem",
            height: "3rem",
            borderRadius: " 0.5rem",
            background: " #E9ECEF",
            border: "none",
            textAlign: "right",
            fontSize: " 1rem",
            fontWeight: "400",
            marginRight: "2rem",
          }}
          placeholder="...جستجوی کالا "
        />

        <img className="logo" src={cetecIcon} alt="cetecIcon" />
      </div>

      <div className="Icons-container">
        <div className="icon-frame shopping-frame ">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
            <path
              d="M2.66675 2.66666H4.98676C6.42676 2.66666 7.56008 3.90666 7.44008 5.33332L6.33341 18.6133C6.14675 20.7866 7.86674 22.6533 10.0534 22.6533H24.2534C26.1734 22.6533 27.8534 21.08 28.0001 19.1733L28.7201 9.17333C28.8801 6.96 27.2001 5.15998 24.9734 5.15998H7.76009"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.6667 29.3333C22.5871 29.3333 23.3333 28.5871 23.3333 27.6667C23.3333 26.7462 22.5871 26 21.6667 26C20.7462 26 20 26.7462 20 27.6667C20 28.5871 20.7462 29.3333 21.6667 29.3333Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 29.3333C11.9204 29.3333 12.6666 28.5871 12.6666 27.6667C12.6666 26.7462 11.9204 26 10.9999 26C10.0794 26 9.33325 26.7462 9.33325 27.6667C9.33325 28.5871 10.0794 29.3333 10.9999 29.3333Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M12 10.6667H28"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="shopping-num">
            <p>۲</p>
          </div>
        </div>
        <div className="icon-frame">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.2134 14.4933C16.0801 14.48 15.9201 14.48 15.7734 14.4933C12.6001 14.3867 10.0801 11.7867 10.0801 8.58666C10.0801 5.31999 12.7201 2.66666 16.0001 2.66666C19.2667 2.66666 21.9201 5.31999 21.9201 8.58666C21.9067 11.7867 19.3867 14.3867 16.2134 14.4933Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.54671 19.4133C6.32004 21.5733 6.32004 25.0933 9.54671 27.24C13.2134 29.6933 19.2267 29.6933 22.8934 27.24C26.12 25.08 26.12 21.56 22.8934 19.4133C19.24 16.9733 13.2267 16.9733 9.54671 19.4133Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div style={{ marginTop: "-1rem", textAlign: "left" }}>
          <p
            style={{
              color: " #ADB5BD",
              fontSize: " 0.75rem",
              fontStyle: " normal",
              fontWeight: " 400",
            }}
          >
            حساب کاربری
          </p>
          <p
            style={{
              color: "#000",
              fontSize: "1rem",
              fontWeight: "700",
              lineHeight: "0.1rem",
            }}
          >
            ورود / ثبت نام
          </p>
        </div>
      </div>
    </header>
  );
}
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
  className="shopping-num"
>
  <g filter="url(#filter0_d_437_566)">
    <circle cx="14" cy="10" r="10" fill="black" />
  </g>
  <defs>
    <filter
      id="filter0_d_437_566"
      x="0"
      y="0"
      width="28"
      height="28"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_437_566"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_437_566"
        result="shape"
      />
    </filter>
  </defs>
</svg>; */
}
