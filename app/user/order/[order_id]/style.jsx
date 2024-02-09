"use client"
export default function PwOrderStyle(){
    return <style jsx global>
    {`
    .Button_root__G_l9X {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      border-radius: 0.5rem;
      border-width: 1px;
      border-color: transparent;
      --tw-bg-opacity: 1;
      background-color: rgb(90 75 218 / var(--tw-bg-opacity));
      padding: 0.875rem;
      text-align: center;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0.025em;
      color: var(--text-secondary);
      --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media (min-width: 768px) {
      .Button_root__G_l9X {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
    }
    .Button_stretch__2Qe9q {
      width: 100%;
    }
    .Button_root__G_l9X:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(68 55 184 / var(--tw-bg-opacity));
    }
    .Button_root__G_l9X:focus {
      --tw-shadow: 0 0 0 2px var(--accent-2);
      --tw-shadow-colored: 0 0 0 2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Button_root__G_l9X[data-active] {
      background-color: var(--accent-6);
    }
    .Button_loading__4K_aO {
      cursor: not-allowed;
    }
    .Button_small__zmyyL {
      transform: none;
      border-radius: 0.375rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    @media (min-width: 768px) {
      .Button_small__zmyyL {
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
      }
    }
    .Button_extraSmall__yH9au {
      transform: none;
      border-radius: 0.375rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    @media (min-width: 768px) {
      .Button_extraSmall__yH9au {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
      }
    }
    .Button_extraExtraSmall__4zc06 {
      transform: none;
      border-radius: 0.375rem;
      padding: 0.25rem 10px;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    @media (min-width: 768px) {
      .Button_extraExtraSmall__4zc06 {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
      }
    }
    .Button_large__4NhaL {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
    .Button_rounded__Tfkzm {
      border-radius: 9999px;
    }
    .Button_naked__xwcQp {
      padding: 0;
      font-weight: 600;
      color: var(--text-primary);
    }
    .Button_naked__xwcQp,
    .Button_naked__xwcQp:active,
    .Button_naked__xwcQp:focus,
    .Button_naked__xwcQp:hover {
      border-style: none;
      background-color: transparent;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Button_naked__xwcQp:active,
    .Button_naked__xwcQp:focus,
    .Button_naked__xwcQp:hover {
      border-width: 0;
    }
    .Button_naked__xwcQp:disabled,
    .Button_secondary__iWbf0 {
      background-color: transparent;
    }
    .Button_secondary__iWbf0 {
      border-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgb(90 75 218 / var(--tw-border-opacity));
      color: var(--text-primary);
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Button_secondaryActive__YVEPY,
    .Button_secondary__iWbf0:active,
    .Button_secondary__iWbf0:focus,
    .Button_secondary__iWbf0:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(241 239 255 / var(--tw-bg-opacity));
    }
    .Button_disabled__Ksgjy,
    .Button_disabled__Ksgjy:hover {
      cursor: not-allowed;
      opacity: 0.6;
      -webkit-transform: translateZ(0);
      -webkit-perspective: 10;
      -webkit-backface-visibility: hidden;
    }
    .Loader_loader-ring__RLWkn {
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
    }
    .Loader_loader-ring__RLWkn div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      margin: 2px;
      border: 2px solid #fff;
      border-radius: 50%;
      -webkit-animation: Loader_loader-ring__RLWkn 1.2s
        cubic-bezier(0.5, 0, 0.5, 1) infinite;
      animation: Loader_loader-ring__RLWkn 1.2s
        cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    .Loader_loader-ring__RLWkn div:first-child {
      -webkit-animation-delay: -0.45s;
      animation-delay: -0.45s;
    }
    .Loader_loader-ring__RLWkn div:nth-child(2) {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }
    .Loader_loader-ring__RLWkn div:nth-child(3) {
      -webkit-animation-delay: -0.15s;
      animation-delay: -0.15s;
    }
    @-webkit-keyframes Loader_loader-ring__RLWkn {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
    @keyframes Loader_loader-ring__RLWkn {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
    .Typography_root__TxCor {
      color: var(--text-primary);
    }
    .Typography_whitespaceNowrap__nm0U6 {
      white-space: nowrap;
    }
    .Typography_heading1__ByZGq {
      font-size: 24px;
      font-weight: 700;
      line-height: 38px;
    }
    @media (min-width: 640px) {
      .Typography_heading1__ByZGq {
        font-size: 24px;
      }
    }
    @media (min-width: 768px) {
      .Typography_heading1__ByZGq {
        font-size: 28px;
        line-height: 44px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_heading1__ByZGq {
        font-size: 34px;
      }
    }
    .Typography_heading2__2HLSZ {
      font-size: 22px;
      line-height: 28px;
    }
    @media (min-width: 640px) {
      .Typography_heading2__2HLSZ {
        font-size: 22px;
      }
    }
    @media (min-width: 768px) {
      .Typography_heading2__2HLSZ {
        font-size: 24px;
        line-height: 38px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_heading2__2HLSZ {
        font-size: 28px;
      }
    }
    .Typography_heading3__j28fo {
      font-size: 15px;
      line-height: 20px;
    }
    @media (min-width: 640px) {
      .Typography_heading3__j28fo {
        font-size: 18px;
      }
    }
    @media (min-width: 768px) {
      .Typography_heading3__j28fo {
        font-size: 20px;
        line-height: 32px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_heading3__j28fo {
        font-size: 24px;
      }
    }
    .Typography_heading6__f9EKE {
      font-size: 14px;
      line-height: 20px;
    }
    @media (min-width: 640px) {
      .Typography_heading6__f9EKE {
        font-size: 16px;
      }
    }
    @media (min-width: 768px) {
      .Typography_heading6__f9EKE {
        font-size: 18px;
        line-height: 24px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_heading6__f9EKE {
        font-size: 20px;
      }
    }
    .Typography_heading7__gujRQ {
      font-size: 14px;
      line-height: 15px;
    }
    @media (min-width: 640px) {
      .Typography_heading7__gujRQ {
        font-size: 15px;
      }
    }
    @media (min-width: 768px) {
      .Typography_heading7__gujRQ {
        font-size: 17px;
        line-height: 22px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_heading7__gujRQ {
        font-size: 18px;
      }
    }
    .Typography_extraSmall__o9U6a {
      font-size: 12px;
      line-height: 16px;
    }
    .Typography_small__10WKi {
      font-size: 14px;
      line-height: 18px;
    }
    .Typography_normal__POCpH {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    @media (min-width: 768px) {
      .Typography_normal__POCpH {
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-base);
      }
    }
    .Typography_productCardTitle__MomCg {
      font-weight: 600;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    @media (min-width: 768px) {
      .Typography_productCardTitle__MomCg {
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-base);
      }
    }
    .Typography_medium__tqAy3 {
      font-size: 18px;
      line-height: 26px;
    }
    @media (min-width: 640px) {
      .Typography_medium__tqAy3 {
        font-size: 20px;
      }
    }
    @media (min-width: 768px) {
      .Typography_medium__tqAy3 {
        font-size: 24px;
        line-height: 38px;
      }
    }
    @media (min-width: 1024px) {
      .Typography_medium__tqAy3 {
        font-size: 28px;
      }
    }
    .Navbar_root__oKPSU {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 40;
      background-color: var(--primary);
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      --tw-shadow: rgba(0, 0, 0, 0.02) 0px 30px 30px,
        rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px;
      --tw-shadow-colored: 0px 30px 30px var(--tw-shadow-color),
        0px 0px 8px var(--tw-shadow-color),
        0px 1px 0px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
    }
    @media (min-width: 768px) {
      .Navbar_root__oKPSU {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .Navbar_root__oKPSU {
      min-height: 74px;
    }
    .Navbar_nav__FsbqY {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    @media (min-width: 768px) {
      .Navbar_nav__FsbqY {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
    .Navbar_navMenu__lJ9fT {
      margin-left: 1.5rem;
      display: none;
    }
    .Navbar_navMenu__lJ9fT > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1rem * var(--tw-space-x-reverse));
      margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }
    @media (min-width: 1024px) {
      .Navbar_navMenu__lJ9fT {
        display: block;
      }
    }
    .Navbar_link__Z6GsF {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      line-height: 1.5rem;
      color: var(--accent-5);
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-duration: 75ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .Navbar_link__Z6GsF:hover {
      color: var(--accent-9);
    }
    .Navbar_link__Z6GsF:focus {
      color: var(--accent-8);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Navbar_logo__grQMD {
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
        skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
        scaleY(var(--tw-scale-y));
      cursor: pointer;
      border-radius: 9999px;
      transition-duration: 0.1s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .Modal_root__4gN_y {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      --tw-bg-opacity: 0.4;
      backdrop-filter: blur(0.8px);
      -webkit-backdrop-filter: blur(0.8px);
    }
    .Modal_modal__99I0C {
      position: relative;
      max-height: 98vh;
      width: 500px;
      max-width: 90%;
      overflow: auto;
      border-radius: 0.75rem;
      border-width: 1px;
      border-color: var(--accent-2);
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      padding: 2rem;
    }
    .Modal_medium__fATHP {
      width: 700px;
    }
    .Modal_large__7_QY2 {
      width: 900px;
    }
    .Modal_modal__99I0C:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Modal_close__AXBq5 {
      position: absolute;
      right: -0.75rem;
      top: -0.75rem;
      z-index: 10;
      margin: 1.5rem;
      border-radius: 9999px;
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175 / var(--tw-bg-opacity));
      padding: 0.25rem;
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-duration: 0.15s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .Modal_close__AXBq5:hover {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    .Modal_close__AXBq5:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .Dropdown_root__MUh9b {
      border-radius: 0.375rem;
      background-color: var(--accent-0);
      -webkit-animation: none;
      animation: none;
      transition: none;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09);
      border: 1px solid #d9d9d9;
    }
    @media (min-width: 1024px) {
      .Dropdown_root__MUh9b {
        will-change: transform, opacity;
        min-width: 147px;
        -webkit-animation-duration: 0.6s;
        animation-duration: 0.6s;
        -webkit-animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        transform-origin: var(
          --radix-dropdown-menu-content-transform-origin
        );
        -webkit-animation-name: Dropdown_slideIn__O6w89;
        animation-name: Dropdown_slideIn__O6w89;
      }
    }
    @-webkit-keyframes Dropdown_slideIn__O6w89 {
      0% {
        opacity: 0;
        transform: translateY(2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes Dropdown_slideIn__O6w89 {
      0% {
        opacity: 0;
        transform: translateY(2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .Dropdown_link__dS1r5 {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      cursor: pointer;
      align-items: center;
      padding: 0.75rem 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      line-height: 1.5rem;
      color: var(--text-primary);
      outline-width: 0;
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-duration: 0.15s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .Dropdown_link__dS1r5:hover {
      background-color: var(--accent-1);
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .UserNav_root__7GZb3 {
      position: relative;
      display: flex;
      align-items: center;
    }
    .UserNav_list__a5C3J {
      display: flex;
      height: 100%;
      flex-direction: row;
      align-items: center;
      justify-items: end;
    }
    .UserNav_item__Tv14Y {
      position: relative;
      margin-left: 1rem;
      display: flex;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      color: var(--text-primary);
      outline: 2px solid transparent;
      outline-offset: 2px;
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-duration: 0.1s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media (min-width: 768px) {
      .UserNav_item__Tv14Y {
        margin-left: 2rem;
      }
    }
    .UserNav_itemUser__zVvf7 {
      position: relative;
      margin-left: 1rem;
      display: flex;
      display: none;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      color: var(--text-primary);
      outline: 2px solid transparent;
      outline-offset: 2px;
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-duration: 0.1s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media (min-width: 768px) {
      .UserNav_itemUser__zVvf7 {
        margin-left: 2rem;
        display: block;
      }
    }
    .UserNav_itemText__5Iw7m {
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 600;
    }
    @media (min-width: 768px) {
      .UserNav_itemText__5Iw7m {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
    .UserNav_item__Tv14Y:hover {
      color: var(--accent-6);
      transition-property: color, background-color, border-color, fill,
        stroke, opacity, box-shadow, transform, filter,
        -webkit-text-decoration-color, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow,
        transform, filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.1s;
    }
    .UserNav_item__Tv14Y:first-child {
      margin-left: 0;
    }
    .UserNav_item__Tv14Y:active,
    .UserNav_item__Tv14Y:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .UserNav_bagCount__D9pjg {
      position: absolute;
      right: -0.5rem;
      top: -0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      border-width: 2px;
      border-color: var(--accent-1);
      --tw-bg-opacity: 1;
      background-color: rgb(90 75 218 / var(--tw-bg-opacity));
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 700;
      color: var(--text-secondary);
    }
    @media (min-width: 768px) {
      .UserNav_bagCount__D9pjg {
        right: 0.125rem;
      }
    }
    .UserNav_bagCount__D9pjg {
      padding-left: 2.5px;
      padding-right: 2.5px;
      min-width: 1.25rem;
      min-height: 1.25rem;
    }
    .UserNav_avatarButton__9exMf {
      display: inline-flex;
      justify-content: center;
      border-radius: 9999px;
    }
    .UserNav_mobileMenu__De3Ei {
      margin-left: 1.25rem;
      display: flex;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    @media (min-width: 768px) {
      .UserNav_mobileMenu__De3Ei {
        display: none;
      }
    }
    .UserNav_avatarButton__9exMf:focus,
    .UserNav_mobileMenu__De3Ei:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    .UserNav_dropdownDesktop__mL6k4 {
      z-index: -10;
      display: none;
    }
    @media (min-width: 1024px) {
      .UserNav_dropdownDesktop__mL6k4 {
        display: block;
      }
      .UserNav_dropdownMobile__mNeEo {
        display: none;
      }
    }
    .CustomerMenuContent_root__k94mX {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 72px;
      z-index: 10;
      height: 100vh;
      min-width: 100vw;
      transition: none;
    }
    @media (min-width: 1024px) {
      .CustomerMenuContent_root__k94mX {
        position: static;
        min-width: inherit;
        height: inherit;
      }
    }
  `}
  </style>
}