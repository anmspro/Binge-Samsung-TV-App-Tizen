window.paymentMethod = {
  id: 'show-payment-method',
  previous: NaN,
  selectedPaymentMode: NaN,
  allPaymentMode: NaN,
  paymentLink: {
    pgw: NaN,
    nagad: NaN
  },
  paymentMethodName: {
    pgw: 'Online/MFS Payment ',
    nagad: 'Nagad'
  },
  paymentMethodImage: {
    pgw: `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
      <path d="M52.8627 54.6971L60.4312 10.283H72.537L64.9629 54.6971H52.8627ZM108.7 11.2404C106.302 10.3406 102.544 9.375 97.8505 9.375C85.8881 9.375 77.4624 15.3989 77.3902 24.0324C77.3229 30.4143 83.406 33.9747 87.9978 36.099C92.7103 38.2766 94.2942 39.6647 94.2715 41.6083C94.2413 44.5857 90.5085 45.9452 87.0286 45.9452C82.1835 45.9452 79.6094 45.272 75.6335 43.6144L74.073 42.9086L72.3744 52.8509C75.202 54.0913 80.4304 55.1649 85.8597 55.2207C98.5854 55.2207 106.847 49.2656 106.941 40.0458C106.986 34.9932 103.761 31.1487 96.776 27.9785C92.5447 25.9239 89.9533 24.5528 89.9807 22.4723C89.9807 20.6262 92.1742 18.6521 96.9142 18.6521C100.872 18.5907 103.741 19.4539 105.975 20.3537L107.06 20.8663L108.7 11.2404ZM139.853 10.2823H130.499C127.601 10.2823 125.432 11.0732 124.16 13.9655L106.181 54.6678H118.893C118.893 54.6678 120.971 49.1952 121.441 47.9934C122.83 47.9934 135.18 48.0125 136.945 48.0125C137.307 49.5675 138.418 54.6678 138.418 54.6678H149.651L139.853 10.2809V10.2823ZM125.011 38.9622C126.013 36.4033 129.835 26.5464 129.835 26.5464C129.764 26.6646 130.829 23.975 131.44 22.3074L132.258 26.1367C132.258 26.1367 134.576 36.7386 135.06 38.9616H125.011V38.9622ZM42.5857 10.2823L30.7337 40.5708L29.4711 34.4158C27.2644 27.3203 20.3902 19.6329 12.7051 15.7844L23.5425 54.6263L36.351 54.612L55.4099 10.2818L42.5857 10.2816" fill="#0E4595"/>
      <path d="M19.6748 10.2812H0.153757L-0.000976562 11.2053C15.1862 14.8817 25.2349 23.7661 29.4073 34.4424L25.1625 14.0323C24.43 11.2199 22.3045 10.3804 19.6752 10.2824" fill="#F2AE14"/>
      <path d="M106.86 111.074L71.3481 105.65L76.0559 126.275L106.86 111.074Z" fill="#D12053"/>
      <path d="M106.862 111.071L80.1026 74.834L71.3569 105.654L106.862 111.071Z" fill="#E2136E"/>
      <path d="M70.5261 105.238L42.4878 70.3125L79.2049 74.5874L70.5261 105.238Z" fill="#D12053"/>
      <path d="M57.7564 90.644L42.187 76.3438H46.2852L57.7564 90.644Z" fill="#9E1638"/>
      <path d="M114.435 93.457L107.845 110.877L97.1646 96.4789L114.435 93.457Z" fill="#D12053"/>
      <path d="M80.2041 125.229L106.059 115.106L107.144 111.889L80.2041 125.229Z" fill="#E2136E"/>
      <path d="M59.5254 144.333L70.6014 106.465L76.2198 131.103L59.5254 144.333Z" fill="#9E1638"/>
      <path d="M115.467 93.5938L112.749 100.786L122.552 100.63L115.467 93.5938Z" fill="#E2136E"/>
    </svg>`,
    nagad: `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
      <path d="M132.872 78.4577C132.872 83.4807 132.352 88.1573 131.313 92.8343C129.408 101.148 125.943 108.942 121.094 115.697C120.92 115.87 120.92 116.044 120.747 116.044C119.881 117.256 119.015 118.296 118.149 119.335C117.976 119.508 117.976 119.682 117.802 119.682C115.031 122.972 111.74 126.089 108.276 128.861C104.639 131.806 100.655 134.231 96.4977 136.309C91.4755 138.734 86.2789 140.466 80.5631 141.678C79.8702 141.851 79.0042 142.025 78.3113 142.025C77.6185 142.198 76.9256 142.198 76.2328 142.372C75.1936 142.545 74.1543 142.545 73.1151 142.717C71.5562 142.891 69.9973 142.891 68.4385 142.891C67.0528 142.891 65.6671 142.891 64.4547 142.717C62.0297 142.545 59.7781 142.372 57.3531 141.851C55.2747 141.506 53.023 140.986 50.9445 140.466C39.1663 137.175 28.7738 130.593 20.8063 121.932C19.5938 120.721 18.5546 119.335 17.5153 118.122C12.6655 111.887 9.02813 104.959 6.60323 97.337C4.69794 91.4482 3.65869 85.0396 3.65869 78.4577C3.65869 52.8228 18.7277 30.6523 40.3788 20.2598C38.4735 22.6847 36.7414 25.2828 35.1826 28.0541C35.0093 28.2273 34.8361 28.4006 34.6629 28.5738C21.8456 38.9662 13.5315 54.9013 13.5315 72.7417C13.5315 76.7255 13.878 80.5362 14.744 84.3467C14.744 84.6931 14.9172 84.8663 14.9172 85.2128C15.0904 85.7324 15.2637 86.4252 15.2637 86.9448C15.4368 87.4644 15.61 87.984 15.7833 88.6769C16.3029 90.409 16.8225 91.9681 17.5153 93.5266C17.6885 93.8733 17.8618 94.3928 18.0349 94.7394C18.3814 95.6056 18.7277 96.298 19.0742 97.1641C19.5938 98.2032 20.1134 99.0693 20.6331 99.9355C20.9795 100.628 21.4991 101.321 21.8456 102.014C22.1919 102.707 22.5384 103.226 23.058 103.746C23.2312 104.092 23.4044 104.265 23.5776 104.612C23.9241 105.132 24.4437 105.825 24.79 106.344C25.1365 106.864 25.4829 107.383 26.0025 107.903C26.3489 108.422 26.6953 108.769 27.0418 109.289C28.4274 111.021 29.9863 112.579 31.7184 114.139C32.4112 114.831 33.1041 115.351 33.7969 115.87C34.3165 116.39 34.8361 116.736 35.3557 117.083C35.8754 117.43 36.395 117.775 36.9146 118.296C37.9539 118.988 38.9931 119.854 40.2056 120.547C40.8984 121.067 41.7645 121.413 42.4573 121.932C43.1501 122.279 43.843 122.799 44.7089 123.145C45.0554 123.318 45.4018 123.492 45.9215 123.665C46.0946 123.839 46.4411 124.011 46.6142 124.011C46.6142 124.011 46.7874 124.011 46.9607 124.184C47.4803 124.531 48.1731 124.704 48.6927 124.878C48.866 125.05 49.0392 125.05 49.3856 125.224C50.0784 125.57 50.7712 125.744 51.4641 125.917C51.8105 126.089 52.3301 126.263 52.6765 126.263C54.755 126.956 56.8335 127.475 58.912 127.996C59.7781 128.168 60.4709 128.341 61.3369 128.515C62.0297 128.688 62.7226 128.688 63.4154 128.861C63.935 128.861 64.4547 129.035 65.1475 129.035H70.517C76.0596 129.035 81.429 128.168 86.6252 126.783C88.1841 126.263 89.743 125.744 91.3019 125.224C92.5145 124.704 93.7264 124.184 94.9392 123.665C95.4587 123.318 96.152 123.145 96.6715 122.799C97.0181 122.626 97.3639 122.453 97.7105 122.279C98.0572 122.106 98.23 121.932 98.5767 121.76C99.4428 121.24 100.309 120.721 101.175 120.201C101.695 119.854 102.387 119.508 102.907 118.988C103.426 118.642 103.946 118.122 104.639 117.775C105.158 117.43 105.505 117.083 106.025 116.736C106.371 116.39 106.718 116.217 107.064 115.87C107.41 115.524 107.93 115.178 108.276 114.831C108.796 114.312 109.315 113.965 109.835 113.446C110.354 112.926 110.874 112.407 111.221 112.06C111.567 111.713 112.087 111.194 112.433 110.674C112.606 110.501 112.78 110.328 112.78 110.155C112.953 109.982 113.126 109.635 113.472 109.462C113.992 108.942 114.511 108.249 114.858 107.73C115.205 107.383 115.378 107.037 115.724 106.517C116.071 106.171 116.417 105.651 116.763 105.132C116.937 104.959 117.11 104.785 117.11 104.439C117.629 103.746 117.976 103.053 118.496 102.36C119.015 101.668 119.362 100.802 119.881 100.108C120.054 99.7626 120.228 99.416 120.574 99.0693V98.8964C120.747 98.3769 121.094 98.0303 121.267 97.5108C121.614 96.9913 121.786 96.4708 121.959 95.9513C122.306 95.2589 122.48 94.7394 122.825 94.0461C122.999 93.5266 123.172 93.0071 123.345 92.6605C123.519 92.3138 123.692 91.7943 123.865 91.4482C124.038 91.2751 124.038 90.9286 124.038 90.7554C124.038 90.5822 124.211 90.2358 124.211 90.0625C124.558 89.1966 124.904 88.1573 125.077 87.2913C125.251 86.9448 125.251 86.4252 125.424 86.0788C125.597 85.3859 125.771 84.52 125.943 83.8271C126.116 83.1343 126.29 82.4414 126.29 81.7486C126.463 80.8825 126.637 80.0165 126.637 78.9773C126.637 78.2844 126.81 77.7648 126.81 77.072C126.81 76.5524 126.81 75.8596 126.982 75.3399V72.3954C126.982 70.8365 126.982 69.1044 126.81 67.5455V67.0259C127.329 67.3723 127.849 67.7188 128.195 68.0651C128.542 68.4116 129.061 68.758 129.408 69.1044C130.1 67.892 130.794 66.6795 131.659 65.6403L131.833 65.467C131.833 65.6403 131.833 65.8135 132.006 65.9867C132.352 67.892 132.699 69.9705 132.872 72.0489V72.2221C132.699 74.3006 132.872 76.3792 132.872 78.4577Z" fill="#EC1C24"/>
      <path d="M126.637 72.5672V75.5117C126.637 76.0313 126.637 76.7241 126.463 77.2438C126.463 77.9366 126.29 78.4562 126.29 79.1491C126.116 80.0151 126.116 80.8811 125.943 81.9204C125.77 82.6132 125.77 83.3061 125.597 83.9989C125.424 84.6917 125.251 85.5577 125.077 86.2506C124.904 86.597 124.904 87.1166 124.73 87.463C124.558 88.5023 124.211 89.3684 123.865 90.2343C123.865 90.4076 123.691 90.7539 123.691 90.9272C123.691 91.1004 123.519 91.4468 123.519 91.62C123.345 91.9666 123.172 92.4862 122.999 92.8328C122.825 93.3523 122.652 93.8718 122.479 94.2185C122.306 94.9109 121.959 95.4304 121.613 96.1237C121.44 96.6432 121.094 97.1627 120.92 97.6822C120.747 98.2017 120.401 98.5484 120.228 99.0679V99.2407C120.054 99.5874 119.881 99.934 119.534 100.281C119.188 100.973 118.668 101.839 118.149 102.533C117.802 103.225 117.283 103.918 116.763 104.611C116.59 104.783 116.416 104.957 116.416 105.304C116.071 105.823 115.724 106.169 115.377 106.69C115.031 107.035 114.858 107.382 114.511 107.901C113.992 108.421 113.645 109.114 113.126 109.634C112.953 109.807 112.78 110.153 112.433 110.326C112.259 110.5 112.086 110.673 112.086 110.847C111.74 111.366 111.22 111.712 110.874 112.232C110.354 112.752 109.835 113.271 109.488 113.618C108.969 114.137 108.449 114.483 107.929 115.003C107.583 115.349 107.063 115.696 106.718 116.043C106.371 116.388 106.024 116.562 105.678 116.909C105.158 117.254 104.811 117.601 104.292 117.948C103.772 118.294 103.253 118.814 102.561 119.16C102.04 119.506 101.521 119.853 100.828 120.372C99.9621 120.892 99.0959 121.411 98.2298 121.931C97.8831 122.105 97.7103 122.278 97.3636 122.451C97.0179 122.624 96.6713 122.797 96.3246 122.971C95.8051 123.317 95.1118 123.663 94.5923 123.837C93.3804 124.357 92.1676 124.876 90.9552 125.396C89.3963 125.915 88.0107 126.435 86.2786 126.954C81.2555 128.514 75.8862 129.206 70.1703 129.206H65.1473C64.6276 129.206 64.108 129.033 63.4151 129.033C62.7223 129.033 62.0295 128.859 61.3366 128.686C60.4707 128.514 59.7778 128.34 58.9118 128.167C56.8332 127.82 54.7547 127.128 52.6762 126.435C52.3299 126.262 51.8103 126.088 51.4638 126.088C50.771 125.915 50.0781 125.568 49.3853 125.396C49.2121 125.396 48.8657 125.223 48.6925 125.049C48.1728 124.876 47.48 124.529 46.9604 124.357C46.7872 124.357 46.7872 124.357 46.6139 124.183C46.2676 124.01 46.0943 124.01 45.9211 123.837C45.5747 123.663 45.0551 123.49 44.7087 123.317C44.0158 122.971 43.323 122.624 42.457 122.105C41.7642 121.758 40.8981 121.239 40.2053 120.719C39.1661 120.026 37.9535 119.333 36.9143 118.467C36.3947 118.121 35.8751 117.774 35.3554 117.254C34.8358 116.909 34.3162 116.388 33.7966 116.043C33.1038 115.523 32.411 114.83 31.7181 114.31L29.2931 111.886C28.9468 111.539 28.6004 111.019 28.2539 110.673C27.9076 110.326 27.3879 109.807 27.0415 109.287C26.695 108.768 26.3487 108.421 26.0022 107.901C25.6558 107.382 25.1362 106.862 24.7898 106.343C24.2702 105.823 23.9238 105.13 23.5773 104.611C23.4041 104.264 23.2309 104.091 23.0577 103.744C22.7113 103.225 22.3649 102.533 21.8453 102.012C21.4988 101.32 20.9792 100.626 20.6327 99.934C20.1131 99.0679 19.5935 98.0289 19.0739 97.1627C18.7275 96.2965 18.3811 95.6042 18.0346 94.738C17.8615 94.3913 17.6883 93.8718 17.515 93.5252C16.8222 91.9666 16.3026 90.2343 15.783 88.6755C15.6098 88.1558 15.4365 87.6362 15.2634 86.9434C15.0902 86.4238 14.9169 85.7309 14.9169 85.2113C14.9169 84.8649 14.7437 84.6917 14.7437 84.3453C14.0509 80.5347 13.5312 76.7241 13.5312 72.7403C13.5312 54.8999 21.8453 38.9648 34.6626 28.5723C34.8358 28.3991 35.0091 28.2259 35.1823 28.0527C29.8128 37.5791 26.695 48.4912 26.695 60.0961C26.695 63.7335 27.0415 67.1977 27.5611 70.6619C28.0807 74.126 28.9468 77.4169 29.986 80.5347C30.5057 81.9204 31.0253 83.3061 31.5449 84.5185C33.1038 88.1558 34.8358 91.62 36.9143 94.9109C37.0876 95.0837 37.0876 95.2575 37.2607 95.4304C37.2607 95.6042 37.4339 95.777 37.4339 95.777V95.9499C37.6072 96.1237 37.7804 96.2965 37.7804 96.6432L38.8196 98.2017C38.9928 98.5484 39.1661 98.7212 39.3392 99.0679C39.5124 99.4145 39.8589 99.7612 40.0321 100.107C40.2053 100.281 40.2053 100.454 40.3785 100.626L40.5517 100.8C40.7249 101.147 41.0714 101.493 41.2446 101.666C41.4177 101.839 41.591 102.012 41.591 102.186C41.9373 102.705 42.457 103.052 42.9766 103.572L44.0158 104.611C45.4015 105.996 46.9604 107.209 48.6925 108.248C51.8103 110.326 55.4476 111.886 59.2581 112.752C59.7778 112.925 60.1242 112.925 60.6438 113.097C60.9903 113.097 61.3366 113.271 61.6831 113.271C63.5884 113.618 65.3204 113.791 67.2257 113.791C70.1703 113.791 72.9416 113.444 75.5397 112.752C90.6088 109.114 101.867 95.4304 101.867 79.1491C101.867 69.4494 97.8831 60.789 91.6481 54.5535C101.694 55.2464 111.047 58.3641 119.362 63.0407C119.708 63.2139 120.054 63.5603 120.573 63.7335C122.306 64.7727 123.865 65.812 125.424 67.0245L125.597 67.1977V67.7173C126.463 69.2762 126.637 71.0083 126.637 72.5672Z" fill="#F6921E"/>
      <path d="M37.0877 80.5346V83.1327C33.277 75.5116 31.0254 66.8512 31.0254 57.8444C31.0254 35.1542 44.5356 15.5816 63.9348 6.74805L75.1934 27.3598C53.0228 34.6346 37.0877 55.7659 37.0877 80.5346Z" fill="#F6921E"/>
      <path d="M110.874 37.753C106.544 36.7137 102.04 36.1941 97.3635 36.1941C86.1052 36.1941 75.5396 39.3119 66.3596 44.6813C63.5882 46.4134 60.8169 48.3187 58.392 50.3972C53.8886 54.2077 49.9048 58.7111 46.6138 63.561C44.8818 66.1591 43.4961 68.7572 42.2837 71.5285C42.2837 71.7017 42.1104 71.875 42.1104 71.875C41.9373 72.2213 41.7641 72.741 41.5908 73.0874C41.5908 72.9142 41.5908 72.741 41.7641 72.5678V72.2213C41.9372 71.5285 42.1104 70.8357 42.2837 69.9697C42.63 68.584 42.9765 67.3715 43.4961 65.9859C45.5746 59.4039 48.8655 53.3417 53.0226 47.9723C59.9508 38.9654 69.304 31.8639 80.0429 27.8802L79.0037 25.9749L73.6343 15.9288L72.9415 14.7164C73.2878 14.3699 73.8075 14.1967 74.3271 14.0235C83.1608 9.17369 93.2065 6.40234 103.772 6.40234C105.851 6.40234 107.929 6.57555 109.834 6.74876L110.528 23.2035V26.6677L110.874 37.753Z" fill="#EC1C24"/>
      <path d="M138.414 34.1161C135.296 32.2108 131.832 30.652 128.368 29.2663C123.691 27.5342 118.842 26.3217 113.819 25.6289L113.992 28.0539L114.338 38.4463L114.511 41.9105C109.662 40.6981 104.466 40.0052 99.2687 40.0052C90.4355 40.0052 81.9483 41.9105 74.5004 45.2014C69.1309 47.6263 64.1078 50.744 59.6045 54.5547C58.0456 55.9403 56.4867 57.326 55.1011 58.7116C60.2973 55.9403 66.0131 53.8618 71.9023 52.4762C76.9253 51.2637 82.2947 50.5709 87.6642 50.5709H88.0105C101.867 50.5709 114.858 54.5547 125.943 61.6562C127.156 62.5222 128.368 63.2151 129.581 64.2543L130.966 62.0026L137.028 52.8225L137.895 51.4369L139.8 48.4924L143.437 42.7765L144.476 41.0444L145.689 39.1391C143.437 37.407 141.013 35.675 138.414 34.1161ZM120.054 27.1878H120.228C120.4 27.1878 120.4 27.1878 120.573 27.361C120.4 27.361 120.228 27.1878 120.054 27.1878Z" fill="#F6921E"/>
      <path d="M63.9351 67.7181C63.9351 67.7181 59.9513 68.5841 60.2977 66.6789C60.2977 65.8128 60.8173 65.6396 61.1638 65.8128C61.1638 65.4663 60.2977 64.4271 62.203 63.9075C62.7227 63.0415 63.2423 62.3486 63.5887 61.829C63.9351 61.3094 64.1083 60.4433 65.6672 60.9629C67.2261 61.3094 68.7849 62.8682 69.1313 63.3878C69.9974 63.3878 71.0366 63.7343 70.6902 63.7343C70.3438 64.0807 70.1705 64.2539 70.1705 64.2539C70.1705 64.2539 70.6902 64.6004 69.1313 64.6004C69.1313 64.9467 69.4777 65.12 69.6509 65.12C69.9974 65.4663 69.6509 65.4663 69.6509 65.6396C69.6509 65.6396 69.9974 66.5056 69.1313 66.1592C68.2653 65.8128 68.2653 65.6396 68.092 65.6396C67.7457 65.6396 67.2261 65.6396 67.2261 65.986C67.2261 66.3324 68.092 66.852 67.2261 66.852C66.8796 67.1985 67.5724 67.3717 67.2261 67.3717C66.8796 67.7181 65.1476 68.9305 64.2815 69.277C63.4155 69.277 63.2423 68.9305 63.2423 68.7573C63.2423 68.5841 63.7619 68.2377 64.2815 68.2377C63.9351 67.8913 64.1083 67.7181 63.9351 67.7181Z" fill="#EC1C24"/>
      <path d="M63.5885 71.8758C63.242 71.8758 62.0296 71.0097 62.7224 70.8365C63.242 70.3169 65.8401 68.758 66.3598 68.4116C66.8794 68.0651 67.7455 68.9312 66.8794 69.4508C66.1866 70.3169 63.5885 71.8758 63.5885 71.8758Z" fill="#EC1C24"/>
      <path d="M67.5723 69.9699C67.5723 69.4502 68.0919 67.8914 68.0919 67.545C68.0919 67.1986 69.4775 67.0254 69.1312 68.5843C68.6116 69.9699 67.5723 70.6628 67.5723 69.9699Z" fill="#EC1C24"/>
      <path d="M69.4776 66.8512C69.4776 66.8512 76.9256 66.5048 77.4452 66.8512C77.9648 67.1977 80.5629 71.0082 79.8701 74.4724C79.3504 77.9366 78.3112 78.6294 73.4614 79.3222C73.4614 78.2829 73.1149 75.3384 72.5953 74.4724C72.0757 73.6063 70.5168 71.8743 69.9972 71.8743C69.9972 72.7403 69.6508 74.992 69.6508 74.992C69.6508 74.992 67.2259 75.3385 67.0527 74.6456V71.0082C67.0527 71.0082 69.1311 69.1029 69.4776 68.5833C69.824 68.9297 69.9972 69.969 72.4222 69.6225C72.4222 69.969 69.4776 70.3154 69.4776 66.8512Z" fill="#EC1C24"/>
      <path d="M66.5333 70.3164C66.5333 70.3164 64.1083 72.2217 63.5887 72.7413C63.2423 73.261 63.0691 75.3395 66.0136 75.3395C66.5333 73.9538 66.5333 70.3164 66.5333 70.3164Z" fill="#EC1C24"/>
      <path d="M60.9902 73.2602C60.1241 73.2602 59.6045 72.9138 59.6045 72.3942C59.6045 71.8746 60.6437 71.0085 61.5098 71.355C62.0294 71.7013 63.415 71.8746 63.415 74.2994C63.9346 74.819 65.3203 75.8583 67.0524 75.8583C68.9577 75.8583 69.9969 75.8583 69.9969 76.378V79.8421C69.9969 79.8421 67.9184 79.8421 62.549 76.2047C62.0294 75.6851 61.683 75.1655 61.683 74.2994C61.683 73.4334 61.1634 73.2602 60.9902 73.2602Z" fill="#EC1C24"/>
      <path d="M59.4317 73.4336C58.5657 73.4336 55.9676 75.5121 57.8729 76.3782C58.3925 75.8586 58.9121 75.339 58.9121 75.339C58.9121 75.339 58.3925 76.7245 59.4317 76.8978C60.471 77.2442 59.9514 76.3782 60.471 76.3782C60.8174 76.8978 60.8174 77.2442 61.3371 77.2442C61.8567 77.2442 61.8567 75.6853 61.3371 74.8193C60.9906 73.9533 60.471 73.4336 59.4317 73.4336Z" fill="#EC1C24"/>
      <path d="M70.5166 73.7812V80.7095C70.5166 80.7095 72.5951 79.8435 72.9416 79.3239C72.9416 78.2846 72.4219 73.7812 70.5166 73.7812Z" fill="#EC1C24"/>
      <path d="M64.9741 78.2832C64.9741 78.2832 67.5722 80.1885 69.1311 80.7081C68.7847 81.0545 67.7455 82.6134 67.2259 82.267C67.0526 82.267 65.1474 79.6689 64.9741 78.2832Z" fill="#EC1C24"/>
      <path d="M55.6208 82.2685H52.1566L51.9834 80.8828H55.6208V82.2685Z" fill="#EC1C24"/>
      <path d="M78.6575 81.9216H91.4753V80.1895H76.4058L78.6575 81.9216Z" fill="#EC1C24"/>
      <path d="M73.4612 80.1899C73.8076 79.8435 75.5397 81.2292 75.0201 81.5756C74.5005 81.922 69.6506 83.6541 69.4774 83.6541C68.9578 83.3077 69.131 82.2684 69.8239 82.0952C69.997 81.7488 72.5951 80.8827 73.4612 80.1899Z" fill="#EC1C24"/>
      <path d="M68.0918 83.3062C67.5722 82.9597 64.6276 85.9043 66.0133 86.2507C67.3989 86.5971 70.5166 87.1167 71.3827 87.6363C72.2488 87.29 72.7684 86.5971 72.7684 86.2507C73.288 86.2507 74.1541 87.1167 74.8469 86.7703C75.713 86.4239 79.3503 83.8258 79.3503 83.3062C78.4842 82.7865 76.9254 81.7473 76.2326 81.7473C75.5397 81.4008 70.6899 84.3454 68.0918 83.3062Z" fill="#EC1C24"/>
      <path d="M66.5332 86.9437C66.8796 86.9437 70.6902 88.3294 71.5562 88.3294C72.5955 87.983 72.5955 87.2902 73.1151 87.2902C73.6347 87.2902 73.9812 87.8098 74.674 87.2902C75.54 86.7705 77.2721 85.2117 77.6185 84.8652C77.6185 85.3848 77.6185 86.9437 74.1543 88.5026C70.6902 90.0615 62.5494 92.4865 62.203 93.5255C62.5494 93.5255 63.5887 93.1789 64.2815 93.006C64.8011 93.3527 65.6672 94.3917 65.3208 96.124C64.9743 98.0292 63.7619 100.973 63.7619 101.667V106.69C63.7619 107.036 64.628 109.287 63.4154 109.115C62.203 108.941 61.8566 108.768 61.337 109.115C60.8173 109.115 59.9513 109.981 59.4316 109.634C58.5657 109.634 57.5264 109.115 57.5264 108.768C57.5264 108.421 58.3924 108.421 59.0853 108.248C59.9513 107.902 60.1245 107.209 61.5101 106.69C61.5101 105.824 60.9905 99.2411 60.9905 97.8554C60.9905 96.4697 60.4709 93.6984 61.337 92.4865C62.0298 91.274 65.1476 86.7705 66.5332 86.9437Z" fill="#EC1C24"/>
      <path d="M71.5562 90.7556C71.5562 91.2753 73.9811 97.1644 75.0203 97.1644C76.0595 97.1644 85.9325 95.0854 87.6645 95.7787C88.1841 96.6449 89.2234 97.8568 89.2234 98.7229C89.2234 98.7229 89.5698 100.628 89.2234 100.802C89.5698 100.802 90.2626 100.455 90.6091 99.9357C90.9555 99.4162 90.6091 96.8177 90.6091 96.2982C90.6091 95.7787 91.9949 93.354 90.2626 93.6997C88.7037 93.6997 84.2003 93.6997 82.6415 93.354C81.2558 93.0074 77.7917 92.315 77.0988 92.8345C76.2328 93.354 75.1936 94.7397 75.1936 94.9125C74.8471 94.9125 74.6739 94.5659 75.1936 93.5269C75.5399 92.4879 76.7524 89.5432 76.5792 87.9844C75.7132 88.3307 71.5562 90.7556 71.5562 90.7556Z" fill="#EC1C24"/>
      <path d="M66.0135 81.4011C66.0135 81.7475 66.3599 82.2671 66.5331 82.4404L58.912 81.9208C58.912 81.9208 58.0459 81.4011 58.3924 81.0547L66.0135 81.4011Z" fill="#EC1C24"/>
      <path d="M57.5264 80.8818H65.1476C65.1476 80.8818 64.628 80.0158 64.2815 79.4961H57.18C57.18 79.4961 56.314 79.4961 56.314 81.055C56.4872 81.4014 57.0068 81.9211 57.5264 80.8818Z" fill="#EC1C24"/>
      <path d="M50.0781 82.2682H51.637C51.637 82.2682 52.1566 81.9219 51.637 81.4022C51.1174 80.8826 50.0781 80.363 50.7709 79.3238C49.905 79.3238 48.8657 78.9773 49.2121 81.4022H48.3461C48.3461 81.4022 47.9996 80.0166 46.2675 80.0166C44.3623 80.0166 39.8589 81.9219 39.8589 81.9219C39.8589 81.9219 44.8819 83.3075 46.2675 83.3075C47.6532 83.3075 48.3461 81.9219 48.3461 81.9219H48.8657C48.8657 81.9219 49.2121 82.9611 49.3853 83.3075V84.8663C49.3853 84.8663 48.6924 85.2128 49.0389 85.9056C49.0389 86.7716 49.5585 86.7716 49.905 86.7716C50.2513 86.7716 50.2513 86.4252 50.9442 86.4252C51.2905 86.0788 50.9442 85.0396 50.4246 84.8663V83.8271C50.4246 83.8271 50.9442 83.3075 50.9442 82.9611C50.5977 82.4415 50.0781 82.7878 50.0781 82.2682Z" fill="#EC1C24"/>
      <path d="M59.4313 89.7155C59.9509 89.3691 60.2974 88.6762 60.2974 88.6762V84.1729C60.2974 83.1336 58.3921 82.2676 58.2189 82.2676C57.8725 82.614 57.3528 82.7872 57.1797 82.7872C56.66 82.7872 56.3136 82.7872 55.794 82.2676C54.2351 82.2676 53.369 84.1729 53.369 84.3461C53.369 84.6925 53.0227 87.9835 53.369 88.5031C53.369 89.0227 53.8887 89.5423 54.2351 89.8888C53.8887 90.928 52.3298 96.9906 54.5815 97.8559V98.8958H59.9509V97.8559C61.1635 96.644 59.9509 91.2744 59.4313 89.7155ZM53.1958 84.1729C53.1958 83.8265 54.0619 82.614 55.1012 82.614C55.6208 83.1336 56.1404 83.1336 56.66 83.1336C57.1797 83.1336 57.6993 82.614 58.0456 82.614C58.5653 82.9604 59.6046 83.48 59.6046 84.1729V88.6762C59.6046 89.0227 59.2581 89.1959 59.0849 89.5423H58.0456V87.4638H54.5815V89.3691H53.7155C53.369 89.0227 53.1958 88.8495 53.1958 88.3299V84.1729ZM57.0064 96.644H55.9671C55.6208 96.644 55.4475 96.2973 55.4475 96.1245C55.4475 95.7778 55.794 95.605 55.9671 95.605H57.0064C57.3528 95.605 57.526 95.9507 57.526 96.1245C57.526 96.2973 57.1797 96.644 57.0064 96.644ZM59.0849 97.1635L56.4868 94.2193L54.0619 97.1635C52.5031 96.644 53.5423 91.7937 54.0619 89.7155H59.0849C59.6046 91.7937 60.4706 96.2973 59.0849 97.1635Z" fill="#EC1C24"/>
      <path d="M58.2189 91.7935C58.7385 90.9278 57.8725 90.4082 57.8725 90.4082H54.7547C53.7155 90.4082 53.8888 91.7935 53.8888 91.7935L55.794 93.353C56.4869 93.353 57.6993 92.6597 58.2189 91.7935Z" fill="#EC1C24"/>
      <path d="M57.0063 93.7001L58.9116 95.7782C58.9116 95.7782 58.5652 93.1797 58.5652 92.3145C58.2188 92.6602 57.0063 93.7001 57.0063 93.7001Z" fill="#EC1C24"/>
      <path d="M54.235 92.3145C54.235 93.1797 53.8887 95.7782 53.8887 95.7782L55.7939 93.7001C55.9671 93.7001 54.9279 92.6602 54.235 92.3145Z" fill="#EC1C24"/>
      <path d="M54.7549 86.771H58.3922V86.4246C58.3922 86.0781 58.0458 86.0781 58.0458 86.0781H55.1013C54.7549 86.0781 54.7549 86.4246 54.7549 86.4246V86.771Z" fill="#EC1C24"/>
      <path d="M59.4314 98.8965H53.3691V99.2422C53.3691 99.5889 53.7156 99.5889 53.7156 99.5889H59.0851C59.4314 99.5889 59.4314 99.2422 59.4314 99.2422V98.8965Z" fill="#EC1C24"/>
    </svg>`,
  },
  timer: NaN,
  init: function () {
    var paymentMethod_element = document.createElement('div');
    paymentMethod_element.id = paymentMethod.id;
    paymentMethod_element.innerHTML = `
        <div class="payment-method-page">
  <div class="payment-content">
  <div class="selected-pack-description">
    <div class="package-title">${subscription.selectedPack.title}</div>
    <div class="package-subtilte-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_1037_2574)">
          <path d="M17.4538 22.5453C17.8555 22.5453 18.1811 22.2197 18.1811 21.8181C18.1811 21.4164 17.8555 21.0908 17.4538 21.0908C17.0522 21.0908 16.7266 21.4164 16.7266 21.8181C16.7266 22.2197 17.0522 22.5453 17.4538 22.5453Z" fill="white" />
          <path d="M5.09053 26.9091C5.49218 26.9091 5.81778 26.5835 5.81778 26.1818C5.81778 25.7802 5.49218 25.4546 5.09053 25.4546C4.68888 25.4546 4.36328 25.7802 4.36328 26.1818C4.36328 26.5835 4.68888 26.9091 5.09053 26.9091Z" fill="white" />
          <path d="M29.8173 2.90918H5.09002C3.85364 2.90918 2.9082 3.85462 2.9082 5.09099V12.3637C2.9082 12.8001 3.19914 13.091 3.63545 13.091C4.07177 13.091 4.3627 12.8001 4.3627 12.3637V5.09105C4.3627 4.65468 4.65364 4.3638 5.08995 4.3638H29.8172C30.2536 4.3638 30.5445 4.65474 30.5445 5.09105V22.5456C30.5445 22.982 30.2535 23.2729 29.8172 23.2729H12.3627C11.9263 23.2729 11.6355 23.5638 11.6355 24.0001C11.6355 24.4364 11.9264 24.7274 12.3627 24.7274H13.8173V26.9092C13.8173 27.3456 13.5263 27.6364 13.09 27.6364H12.3628C11.9264 27.6364 11.6355 27.9274 11.6355 28.3637C11.6355 28.8 11.9265 29.0909 12.3628 29.0909H22.5446C22.981 29.0909 23.2718 28.8 23.2718 28.3637C23.2718 27.9274 22.9809 27.6364 22.5446 27.6364H21.8173C21.381 27.6364 21.0901 27.3455 21.0901 26.9092V24.7274H29.8173C31.0537 24.7274 31.9991 23.7819 31.9991 22.5456V5.09105C31.9991 3.85468 31.0536 2.90918 29.8173 2.90918ZM15.1263 27.6365C15.1991 27.4183 15.2718 27.2001 15.2718 26.9092V24.7274H19.6354V26.9092C19.6354 27.2002 19.7081 27.4183 19.7808 27.6365H15.1263Z" fill="white" />
          <path d="M28.364 18.9092H12.364C11.9276 18.9092 11.6367 19.2001 11.6367 19.6364C11.6367 20.0727 11.9277 20.3637 12.364 20.3637H28.364C28.8003 20.3637 29.0912 20.0727 29.0912 19.6364C29.0912 19.2001 28.8003 18.9092 28.364 18.9092Z" fill="white" />
          <path d="M8 14.5454H2.18181C0.945438 14.5454 0 15.4909 0 16.7272V26.909C0 28.1454 0.945438 29.0908 2.18181 29.0908H8C9.23637 29.0908 10.1818 28.1454 10.1818 26.909V16.7272C10.1818 15.4909 9.23637 14.5454 8 14.5454ZM8.72725 26.909C8.72725 27.3454 8.43631 27.6363 8 27.6363H2.18181C1.74544 27.6363 1.45456 27.3453 1.45456 26.909V16.7272C1.45456 16.2908 1.7455 16 2.18181 16H8C8.43637 16 8.72725 16.2909 8.72725 16.7272V26.909Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1037_2574">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="package-subtitle ml-20">${subscription.selectedPack.device_stream_details} </div>
    </div>
    <div class='package-price'>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32" viewBox="0 0 27 32" fill="none">
        <path d="M5.16582 0C6.50749 0 7.55823 0.559424 8.31843 1.67748C9.12351 2.7505 9.57073 4.22634 9.66041 6.10483V13.1488H11.5389L14.6918 16.3692H9.66041V25.4927C9.66041 26.2082 9.92867 26.8566 10.4651 27.4382C11.0019 28.0199 11.8742 28.3103 13.0819 28.3102C14.6472 28.3103 16.3021 27.4382 18.0461 25.6942C19.8348 23.9049 20.7741 22.0716 20.8637 20.1932L20.0587 20.2598C17.1964 20.2598 15.7649 18.7394 15.7649 15.698C15.7649 14.6692 16.1005 13.7527 16.7714 12.9478C17.4426 12.1427 18.5603 11.7402 20.1257 11.7402C21.7806 11.7402 23.167 12.4556 24.2852 13.8867C25.4482 15.3181 26.0297 17.0623 26.0297 19.1193C26.0297 22.1608 24.7322 25.068 22.1383 27.8408C19.5891 30.6136 16.5475 32 13.0146 32C11.7178 32.0002 10.3312 31.441 8.85518 30.3232C7.42398 29.1599 6.5745 28.0417 6.30608 26.9687V16.3692H3.0856L0 13.1488H6.30608V6.77598C6.30608 5.47872 5.52344 4.71844 3.95785 4.49483C3.24229 4.49483 2.77294 4.60656 2.54909 4.83033C2.14675 4.15917 1.76645 3.35433 1.40867 2.41516V2.07967C1.40867 1.49843 1.85606 1.00633 2.75042 0.60383C3.64511 0.201329 4.45019 0 5.16582 0Z" fill="white" />
      </svg>
      <div class='package-price-text'>${subscription.selectedPack.display_amount}</div>

    </div>
    </div>
    <div class="payment-list"> </div>
  </div>
  <div id="payment-qr-code"> </div>
</div>
</div>`;
    paymentMethod.previous = main.state;
    main.state = paymentMethod.id;
    $(`#${subscription.id}`).append(paymentMethod_element);
    $("#subscription .content").hide();


    var cutomerApiCalled = 0;
    paymentMethod.load();
    this.updateQRCodeText(this.paymentLink[0]);
    this.timer = setInterval(function () {
      cutomerApiCalled++;
      console.log('cutomerApiCalled', cutomerApiCalled);
      if (cutomerApiCalled === 24) {
        console.log('ashe nah ken');
        clearInterval(window.paymentMethod.timer);
        window.paymentMethod.destroy();
      };
      api.getCustomerDetails({
        success: function (data) {
          if (data.customer && data.customer.status_id === 2) {
            window.session.storage.customer = data.customer;
            window.session.update();
            clearInterval(window.paymentMethod.timer);
            window.paymentMethod.destroy();
            subscription.destroy();
            window.location.reload();
            main.init();
          }
        }
      })
    }, 30000);


  },
  load: async function () {
    var paymentMethod = "";
    var selectedPack = subscription.selectedPack;
    var paymentMode = [];
    if (selectedPack.payment_mode == 'all') {
      paymentMode = ["pgw", "nagad"];
    } else {
      paymentMode = selectedPack.payment_mode.split(",")
    }
    this.allPaymentMode = paymentMode;
    console.log('payment mode', paymentMethod, this.allPaymentMode);
    if (this.allPaymentMode.includes('pgw')) {
      console.log('calling pgw');
      api.getPGWLink({
        data: {
          customer_id: session.storage.customer.id,
          package_id: subscription.selectedPack.id,
        },
        success: function (response) {
          window.paymentMethod.paymentLink.pgw = response.invoice.paymentUrl
          console.log('response', response, window.paymentMethod.paymentLink);
          console.log('payment method', window.paymentMethod.allPaymentMode, window.paymentMethod.allPaymentMode[0])
          window.paymentMethod.updateQRCodeText(window.paymentMethod.paymentLink[window.paymentMethod.allPaymentMode[0]]);
        }

      });
    }
    if (this.allPaymentMode.includes('nagad')) {
      console.log('calling nagad');
      api.getNagadLink({
        data: {
          customer_id: session.storage.customer.id,
          package_id: subscription.selectedPack.id,
        },
        success: function (response) {
          window.paymentMethod.paymentLink.nagad = response.invoice.paymentUrl
          console.log('response', response, window.paymentMethod.paymentLink);
          console.log('payment method', window.paymentMethod.allPaymentMode, window.paymentMethod.allPaymentMode[0])
          window.paymentMethod.updateQRCodeText(window.paymentMethod.paymentLink[window.paymentMethod.allPaymentMode[0]]);

        }

      });
    }

    paymentMode.forEach(mode => {
      // paymentMethod += `<div class="payment_mode">${this.paymentMethodName[mode]}</div>`;
      paymentMethod += `<div class="payment_mode" id="${mode}"><div class="paymentMethodImage">${this.paymentMethodImage[mode]}</div><div class="paymentModeName">${this.paymentMethodName[mode]}</div></div>`;
    });
    $(".subscription .payment-list").eq(0).html(paymentMethod);
    $('.payment-list .payment_mode').eq(0).addClass("selected");
    console.log('class', $('.payment-list .payment_mode').eq(0));

    console.log('session', api.customer);


    // $("#subscription .payment-list").slick({
    //     vertical: true,
    //     dots: false,
    //     arrows: false,
    //     infinite: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     speed: 0,
    //     waitForAnimate: false,
    //     cssEase: 'ease-in-out'
    // });

    // $("#subscription .payment-list")[0].slick.slickGoTo(0);
    this.selectedPaymentMode = this.allPaymentMode[0];
    console.log('this log', this.selectedPaymentMode);

  },
  keyDown: function (event) {
    switch (event.keyCode) {
      case tvKey.KEY_BACK:
      case 27:
        paymentMethod.destroy();
        break;
      case tvKey.KEY_LEFT:
        var buttons = $('.payment-list .payment_mode');
        var current = buttons.index($('.payment-list .payment_mode.selected'));
        buttons.removeClass("selected");
        buttons.eq(current > 0 ? current - 1 : current).addClass("selected");

        console.log('current', $('.payment-list .payment_mode.selected').attr('id'));
        this.updateQRCodeText(this.paymentLink[$('.payment-list .payment_mode.selected').attr('id')]);

        break;
      case tvKey.KEY_RIGHT:
        var buttons = $('.payment-list .payment_mode');
        var current = buttons.index($('.payment-list .payment_mode.selected'));
        buttons.removeClass("selected");
        buttons.eq(current < buttons.length - 1 ? current + 1 : current).addClass("selected");
        console.log('current', $('.payment-list .payment_mode.selected').attr('id'),this.paymentLink[$('.payment-list .payment_mode.selected').attr('id')]);
        // this.updateQRCodeText("instagram.com");
        this.updateQRCodeText(this.paymentLink[$('.payment-list .payment_mode.selected').attr('id')]);
        break;
      case tvKey.KEY_ENTER:
        var selectedPack = subscription.selectedPack;
        var item = this.allPaymentMode[$("#subscription .payment-list")[0].slick.currentSlide];
        console.log('all payment mode', item);
        this.selectedPaymentMode = item;
        console.log('payment mode', this.selectedPaymentMode);
        break;

    }
  },
  destroy: function () {
    clearInterval(this.timer);
    $(`#${paymentMethod.id}`).remove();
    $("#subscription .content").show();
    main.state = paymentMethod.previous;
  },
  updateQRCodeText: function (paymentLink) {
    console.log('ami call hpcci');
    $("#payment-qr-code").empty();
    var newText = paymentLink;
    var imageLink = "";
    console.log('payment link', paymentLink);
    // if(paymentLink && paymentLink.includes("sslcommerz")){
    //     imageLink = "https://binge.buzz/assets/svg/card.svg"
    // }else{
    //     imageLink = "https://binge.buzz/assets/svg/nagad.svg"
    // }
    // Customize newText based on your requirements
    // For example, concatenate with this.selectedPaymentMode or any other logic
    // var qrcode = new QRCode(document.getElementById('payment-qr-code'), {
    //     text: newText,
    //     width: 512,
    //     height: 512,
    //     colorDark: '#FFF',
    //     colorLight: '#000',
    //     correctLevel: QRCode.CorrectLevel.H
    // });
    const qrCode = new QRCodeStyling(
      {
        "width": 500,
        "height": 500,
        "data": paymentLink,
        "margin": 5,
        "imageOptions": {
          "hideBackgroundDots": true,
          "imageSize": 0.3,
          "margin": 0
        },
        "dotsOptions": {
          "type": "square",
          "color": "#000000",
          "gradient": null
        },
        "backgroundOptions": {
          "color": "#ffffff"
        },
        // image: imageLink,
        "dotsOptionsHelper": {
          "colorType": {
            "single": true,
            "gradient": false
          },
          "gradient": {
            "linear": true,
            "radial": false,
            "color1": "#6a1a4c",
            "color2": "#6a1a4c",
            "rotation": "0"
          }
        },
        "cornersSquareOptions": {
          "type": "square",
          "color": "#000000"
        },
        "cornersSquareOptionsHelper": {
          "colorType": {
            "single": true,
            "gradient": false
          },
          "gradient": {
            "linear": true,
            "radial": false,
            "color1": "#000000",
            "color2": "#000000",
            "rotation": "0"
          }
        },
        "cornersDotOptions": {
          "type": "square",
          "color": "#000000"
        },
        "cornersDotOptionsHelper": {
          "colorType": {
            "single": true,
            "gradient": false
          },
          "gradient": {
            "linear": true,
            "radial": false,
            "color1": "#000000",
            "color2": "#000000",
            "rotation": "0"
          }
        },
        "backgroundOptionsHelper": {
          "colorType": {
            "single": true,
            "gradient": false
          },
          "gradient": {
            "linear": true,
            "radial": false,
            "color1": "#ffffff",
            "color2": "#ffffff",
            "rotation": "0"
          }
        }
      }
    );

    qrCode.append(document.getElementById('payment-qr-code'));
    // qrCode.download({ name: "qr", extension: "svg" });
  },
}