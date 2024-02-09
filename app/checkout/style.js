"use client"
import React from 'react'

const Style = () => {
  return (
    <style jsx global>
      {`
        .bottom-bar{
          display: none;
        }
        button:disabled {
          opacity: 0.8;
          }
            .shadow {
              --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px -1px rgba(0, 0, 0, 0.1);
              --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
                0 1px 2px -1px var(--tw-shadow-color);
            }

            .shadow,
            .shadow-all-round {
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .shadow-all-round {
              --tw-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);
              --tw-shadow-colored: 0px 3px 10px var(--tw-shadow-color);
            }

            .shadow-lg {
              --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1);
              --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
                0 4px 6px -4px var(--tw-shadow-color);
            }

            .shadow-all-round-strong,
            .shadow-lg {
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .shadow-all-round-strong {
              --tw-shadow: 1px 4px 12px rgba(0, 0, 0, 0.2);
              --tw-shadow-colored: 1px 4px 12px var(--tw-shadow-color);
            }

            .shadow-xl {
              --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 8px 10px -6px rgba(0, 0, 0, 0.1);
              --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
                0 8px 10px -6px var(--tw-shadow-color);
            }

            .shadow-top,
            .shadow-xl {
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .shadow-top {
              --tw-shadow: 0 0px 20px rgba(0, 0, 0, 0.15),
                0 0px 10px rgba(0, 0, 0, 0.12);
              --tw-shadow-colored: 0 0px 20px var(--tw-shadow-color),
                0 0px 10px var(--tw-shadow-color);
            }

            .shadow-md {
              --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -2px rgba(0, 0, 0, 0.1);
              --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
                0 2px 4px -2px var(--tw-shadow-color);
            }

            .shadow-2xl,
            .shadow-md {
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .shadow-2xl {
              --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
            }

            .shadow-card {
              --tw-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);
              --tw-shadow-colored: 0px 3px 10px var(--tw-shadow-color);
            }

            .shadow-card,
            .shadow-sm {
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }
            .Button_root__G_l9X {
              display: inline-flex;
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
                transform, filter, backdrop-filter,
                -webkit-text-decoration-color, -webkit-backdrop-filter;
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
          `}

    </style>
  )
}

export default Style