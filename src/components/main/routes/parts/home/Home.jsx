import './style/home.scss'
import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <div className='home'>
            <NavLink to='/admin-procedure'>
                <div className='home__item'>
                    <p>
                        Административные процедуры
                    </p>
                    <svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.643 0.0344571C8.44593 0.0864183 8.19229
                    0.0964782 7.55327 0.27703C5.38798 0.888756 3.56558 2.35907 2.25339 4.55281C0.807586
                    6.97015 -0.0019523 10.4537 3.53573e-06 14.2495C0.000536946 15.3789 0.101974 15.7472
                    0.583554 16.3685C1.10398 17.0399 1.43141 17.0892 5.93579 17.1749C8.05334 17.2153 9.80248
                    17.2646 9.82284 17.2846C9.8432 17.3047 9.86987 23.4007 9.88214 30.8313C9.89432 38.2619
                    9.93014 48.4749 9.9617 53.5266C10.017 62.3615 10.026 62.7351 10.1972 63.3241C10.4815 64.3018
                    10.6901 64.767 11.1845 65.5252C11.9847 66.7527 13.3206 67.8472 14.7248 68.4258C15.8684 68.897
                    15.8299 68.8945 22.8888 68.9618C31.2933 69.0418 56.089 68.9867 57.7827 68.8841C59.1422 68.8018
                    59.9019 68.6275 60.7609 68.2007C62.6603 67.257 64.146 65.5056 64.7197 63.5334C64.9962 62.5832
                    65.0633 60.2951 65.0684 51.6461L65.0727 44.2544L62.5736 46.7134L60.0747 49.1724L60.0019
                    55.7234C59.9597 59.5155 59.8919 62.4168 59.8408 62.6128C59.7385 63.0052 59.3298 63.5399 59.0163
                    63.6915C58.3652 64.0065 57.2383 64.0239 37.4687 64.0239C17.9397 64.0239 16.8807 64.0085 16.0178
                    63.7114C15.8181 63.6426 15.6146 63.4503 15.3761 63.1046L15.0267 62.5983L14.9785 46.2094C14.952
                    37.1955 14.911 28.8953 14.8876 27.7647C14.8641 26.6341 14.8375 23.1109 14.8285 19.9355C14.8065
                    12.1087 14.7353 9.33911 14.5371 8.60728C14.2987 7.72665 13.6607 6.5912 13.0932 6.03712C12.5535
                    5.51042 12.1866 5.3045 11.5094 5.1487C11.1207 5.0593 11.3721 5.03953 13.5097 4.99168C17.6896
                    4.89808 44.2385 4.84752 49.2926 4.92354L54.0933 4.99571L54.849 5.23714C56.6984 5.82822 57.8089
                    6.66949 58.9023 8.30749C59.4898 9.18777 59.7876 10.0481 59.9144 11.2316C59.9746 11.7931 60.02
                    14.5721 60.0313 18.3826C60.0415 21.8104 60.07 24.6151 60.0948 24.6153C60.1195 24.6155 61.2551
                    23.5176 62.6183 22.1756L65.0967 19.7358L65.0805 17.6487C65.0495 13.6423 64.9113 10.5569 64.7246
                    9.70074C64.2465 7.50857 63.0468 5.32794 61.4373 3.72563C59.7846 2.08028 57.9093 1.00423 55.5273
                    0.334153L54.4489 0.0308705L36.7575 0.00558971C27.0272 -0.00831911 16.6257 0.00462747 13.643
                    0.0344571ZM71.6958 17.4256C70.98 17.6711 70.2034 18.2557 68.7893 19.6137L67.4631 20.8873L71.8909
                    25.2499L76.3187 29.6126L77.665 28.2545C79.6933 26.2081 80.0663 25.549 79.9912 24.1424C79.9281
                    22.9603 79.7254 22.6734 77.1652 20.1422C75.9661 18.9569 74.8252 17.886 74.6296 17.7623C73.8785
                    17.2876 72.5447 17.1345 71.6958 17.4256ZM29.2225 19.8364C28.8115 19.9873 28.3077 20.3851 27.1561
                    21.4677C25.4334 23.0871 25.0549 23.4349 24.9892 23.4582C24.9527 23.4713 24.6707 23.2828 24.3625
                    23.0395C23.4991 22.3577 23.1695 22.2155 22.4443 22.2126C21.9098 22.2103 21.753 22.2482 21.333
                    22.4813C20.136 23.1457 19.6902 24.5326 20.3137 25.6527C20.7829 26.4956 22.6655 28.3917 23.7073
                    29.0707C24.2588 29.4301 24.9529 29.5756 25.4365 29.433C25.6399 29.373 25.9543 29.232 26.1351
                    29.1197C27.0056 28.579 31.3604 24.3381 31.9617 23.4455C32.2596 23.0033 32.3125 22.8506 32.3412
                    22.3502C32.3835 21.6135 32.2579 21.1557 31.8794 20.668C31.291 19.9097 30.0666 19.5265 29.2225
                    19.8364ZM37.4242 22.2437C36.5792 22.305 36.293 22.4259 35.8112 22.9244C35.3103 23.4427 35.0825
                    23.9583 35.0831 24.5718C35.0842 25.5564 35.6533 26.3977 36.6133 26.834C37.0185 27.0182 37.1099
                    27.0211 43.2473 27.0477C50.2878 27.0783 53.1292 27.0023 53.581 26.7713C54.0264 26.5435 54.4846
                    26.1111 54.6976 25.7173C54.9759 25.2026 54.9751 24.0271 54.6961 23.5109C54.4516 23.0586 53.7726
                    22.463 53.3486 22.3286C52.9957 22.2169 38.8335 22.1413 37.4242 22.2437ZM59.5792 28.7051C56.258
                    31.9646 51.6691 36.5015 49.3817 38.7868L45.2227 42.9419L44.5249 44.3595C44.1411 45.1392 43.6508
                    46.1627 43.4355 46.6339C43.2201 47.1051 42.7154 48.1993 42.3138 49.0653C41.4678 50.8904 41.1459
                    51.6107 40.477 53.1767C39.9514 54.4073 39.9369 54.55 40.2621 55.2762C40.6327 56.1037 41.2686
                    56.5446 42.0915 56.5446C42.4603 56.5446 42.8546 56.446 43.6286 56.1604C45.1525 55.5982 49.428
                    53.6929 52.4042 52.2498L53.7377 51.6033L56.0458 49.4158C57.3154 48.2127 61.996 43.6572 66.4473
                    39.2927L74.5407 31.3569L70.1758 27.0678C67.7751 24.7087 65.7674 22.7785 65.7143 22.7785C65.6613
                    22.7785 62.9004 25.4455 59.5792 28.7051ZM29.169 32.1799C28.7533 32.3652 28.1861 32.8427 26.49
                    34.4348C25.6829 35.1925 24.9889 35.8125 24.9479 35.8126C24.9069 35.8126 24.6668 35.634 24.4145
                    35.4159C23.376 34.5181 22.3911 34.3133 21.4034 34.7898C20.5453 35.2037 20.065 35.9719 20.0528
                    36.9498C20.0469 37.4184 20.0899 37.5973 20.2977 37.9673C20.8412 38.9353 22.8837 40.9482 23.9092
                    41.5263C24.1759 41.6766 24.5375 41.7921 24.8366 41.8225C25.789 41.9192 26.5396 41.3595 29.7422
                    38.1642C31.9617 35.9501 32.2893 35.5143 32.3415 34.7068C32.4095 33.6572 31.9739 32.8266 31.114
                    32.3665C30.5332 32.0556 29.6402 31.97 29.169 32.1799ZM37.602 34.5834C36.5617 34.6428 36.3172
                    34.735 35.8112 35.2587C35.3103 35.7769 35.0825 36.2926 35.0831 36.906C35.0842 37.8882 35.6512
                    38.7384 36.5797 39.1503C37.016 39.3438 37.0986 39.348 41.0692 39.3799L45.1142 39.4123L47.6029
                    36.9564L50.0916 34.5004L44.3135 34.5153C41.1356 34.5235 38.1154 34.5542 37.602 34.5834ZM29.3708
                    44.4631C28.9134 44.5785 28.3861 44.9964 26.6671 46.6059C25.7626 47.4528 24.999 48.1459 24.9704
                    48.1463C24.9417 48.1466 24.6762 47.9557 24.3803 47.722C23.573 47.0845 23.0897 46.8796 22.3999
                    46.8825C21.731 46.8852 21.3048 47.0685 20.7653 47.585C20.2774 48.0523 20.0505 48.5896 20.0479
                    49.284C20.0448 50.0769 20.2777 50.4931 21.3571 51.6245C22.8264 53.1644 23.606 53.8169 24.1689
                    53.9779C24.794 54.1567 25.606 54.0971 26.1363 53.8334C26.5828 53.6115 31.5926 48.7228 32.0457
                    48.067C32.2784 47.7301 32.3163 47.5893 32.3433 46.9617C32.3776 46.166 32.2377 45.7213 31.7889
                    45.1989C31.3186 44.6513 30.0971 44.2796 29.3708 44.4631ZM49.7404 47.375C51.2007 48.8631 51.5834
                    49.2956 51.5054 49.3696C51.4119 49.4583 46.7999 51.5584 46.6985 51.5584C46.6605 51.5584 46.3029
                    51.239 45.904 50.8485L45.1789 50.1387L45.5591 49.2958C46.6659 46.8421 47.2286 45.6331 47.3478
                    45.4521L47.4806 45.2505L48.2533 45.9487C48.6782 46.3327 49.3475 46.9745 49.7404 47.375Z"
                              fill="#C4C4C4"/>
                    </svg>
                </div>
            </NavLink>


            <NavLink to='/guide'>
                <div className='home__item'>
                    <p>
                        Руководство
                    </p>
                    <svg width="65" height="78" viewBox="0 0 65 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M45.8887 32.8826C47.4037 33.4307 52.0569 22.0314
                    47.4037 22.0314C47.4037 22.0314 51.1912 6.90535 43.508 5.59005C43.508 5.59005 41.1273 0 32.2538
                    0C26.302 0 13.1 6.46681 17.1039 22.0314C13.8575 20.2776 15.0478 31.3481 18.5106 32.8826L19.0817
                    35.4546C19.3451 36.1897 19.7005 37.033 20.1609 37.9167L20.2174 38.0242C22.1332 41.6466 25.8113
                    45.8961 32.1456 46.1453C32.2793 46.0851 32.5618 46.06 32.96 46.0247C35.4619 45.8027 42.5278 45.1757
                    45.8887 32.8826ZM39.1018 7.69733C38.9529 7.10747 36.0792 4.83829 32.5002 5.13154C13.7109 6.67105
                    24.8831 32.3289 24.8831 32.3289L23.3596 31.3026C23.3596 31.3026 23.4344 33.2438 23.8674
                    34.3815C26.4065 41.0526 31.9924 41.0526 31.9924 41.0526C40.1174 41.5658 42.1487 27.1973 42.1487
                    27.1973H40.6252C40.6252 27.1973 44.6877 17.4473 42.6565 10.7763C42.3591 9.79962 40.1174 10.2631
                    40.1174 10.2631C40.1174 10.2631 39.2507 8.28718 39.1018 7.69733Z" fill="#C4C4C4"/>
                        <path fillRule="evened" clipRule="evened" d="M44.0493 44.1723C44.0493 44.1723 54.5456 50.5296
                    58.8747 51.0777C62.7747 51.5714 64.271 55.3572 64.8264 59.2983C65.367 63.1346 64.5017 67.2998
                    64.1771 69.9304C43.8326 81.5489 18.0779 79.7952 0.763856 69.9304C-0.102119 67.6286 -0.210537
                    63.025 0.331001 58.7503C0.793682 55.098 2.1832 51.8308 5.74169 51.0777C12.9919 49.5432 20.9998
                    44.2819 20.9998 44.2819L27.9255 66.4229L30.739 58.5311C30.739 58.5311 27.2871 54.9209 28.1419
                    52.5026C28.8457 50.5115 30.3827 49.3487 32.4705 49.3239C34.5926 49.2988 36.1988 50.4762 36.9072
                    52.5026C37.7595 54.9403 34.2019 58.5311 34.2019 58.5311L37.1237 66.4229L44.0493 44.1723ZM34.2019
                    72.8684L32.5 68.7632L30.739 72.8684H34.2019Z" fill="#C4C4C4"/>
                    </svg>
                </div>
            </NavLink>


            <NavLink to='/reception-scheduled'>
                <div className='home__item'>
                    <p>
                        график приЁма
                    </p>
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.0308 12.2973C30.3793 12.8818 28.5577 14.5168 26.5188 16.3469L23.1583 19.3631C22.8374
                    19.2606 22.4955 19.2053 22.1408 19.2053C20.288 19.2053 18.7861 20.7138 18.7861 22.5746C18.7861
                    23.6771 19.3133 24.6558 20.1282 25.2705L20.4636 33.5248C20.4636 35.378 23.6506 35.378 23.6506
                    33.5248L24.1538 25.2702C24.9685 24.6555 25.4954 23.6769 25.4954 22.5746C25.4954 22.2642 25.4536
                    21.9635 25.3754 21.6781L32.3727 13.8135C33.3791 12.6349 32.0372 11.3943 31.0308 12.2973Z"
                              fill="#C4C4C4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M44.9525 22.5746C44.9525 35.0422 34.8895 45.1491
                    22.4762 45.1491C10.063 45.1491 0 35.0422 0 22.5746C0 10.107 10.063 0 22.4762 0C34.8895 0 44.9525
                    10.107 44.9525 22.5746ZM38.9138 22.5743C38.9138 31.6924 31.5544 39.0841 22.476 39.0841C13.3976
                    39.0841 6.03815 31.6924 6.03815 22.5743C6.03815 13.4562 13.3976 6.06457 22.476 6.06457C31.5544
                    6.06457 38.9138 13.4562 38.9138 22.5743Z" fill="#C4C4C4"/>
                        <path d="M65.9188 11.9609H69.7767C75.9828 12.6348 77.9956 18.1942 77.9956 20.8897V70.0821C78.1634
                    73.4514 73.4668 78 69.609 78H14.2571C10.2315 78 6.37362 73.7883 6.20588 70.419L6.03815
                    42.1165C6.03815 42.1165 9.56054 44.6435 11.9088 45.6543V69.7451C11.9088 71.2613 13.2507
                    72.2721 14.2571 72.2721H69.609C70.7831 72.2721 71.7895 71.2613 71.7895
                    70.0821V30.1554H46.7973C50.1519 20.2158 45.4554 11.9609 45.4554 11.9609H53.8421V19.0366C53.8421
                    20.3843 55.8549 24.0906 59.7127 24.0906C64.577 24.0906 65.9188 20.0474 65.9188 19.0366V11.9609Z"
                              fill="#C4C4C4"/>
                        <path d="M33.0432 48.1813H38.9138V54.0777H33.0432V48.1813Z" fill="#C4C4C4"/>
                        <path d="M50.9906 48.1813H44.9522V54.0777H50.9906V48.1813Z" fill="#C4C4C4"/>
                        <path d="M44.9522 36.2202H50.9906V42.1165H44.9522V36.2202Z" fill="#C4C4C4"/>
                        <path d="M62.8997 36.2202H57.029V42.1165H62.8997V36.2202Z" fill="#C4C4C4"/>
                        <path d="M57.029 48.1813H62.8997V54.0777H57.029V48.1813Z" fill="#C4C4C4"/>
                        <path d="M50.9906 60.1425H44.9522V66.2073H50.9906V60.1425Z" fill="#C4C4C4"/>
                        <path d="M57.029 60.311H62.8997V66.2073H57.029V60.311Z" fill="#C4C4C4"/>
                    </svg>

                </div>
            </NavLink>


            <NavLink to='/structure'>
                <div className='home__item'>
                    <p>
                        Структура
                    </p>
                    <svg width="80" height="65" viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M42.2885 0H48.0804C53.058 0 57.0932
                    4.02937 57.0932 8.99993V14.4623C57.0932 19.4328 53.058 23.4622 48.0804
                    23.4622H47.6358V28.6697H76.7198C77.0003 28.6697 77.27 28.7158 77.5217 28.8007C78.8927 28.8143
                    80 29.9283 80 31.3006V41.729C80 43.1097 78.8791 44.229 77.4964 44.229C76.1137 44.229 74.9929
                    43.1097 74.9929 41.729V33.6696H47.6358V40.6633C47.6358 40.9709 47.5803 41.2656 47.4784
                    41.5378H48.2625C53.2402 41.5378 57.2754 45.5672 57.2754 50.5377V56.0001C57.2754 60.9706
                    53.2402 65 48.2625 65H42.4708C37.4931 65 33.458 60.9706 33.458 56.0001V50.5377C33.458 45.5672
                    37.4931 41.5378 42.4708 41.5378H42.7861C42.6844 41.2656 42.6287 40.9709 42.6287
                    40.6633V33.6696H15.0974V41.5424C19.9396 41.6968 23.8174 45.665 23.8174 50.5377V56.0001C23.8174
                    60.9706 19.7823 65 14.8046 65H9.01283C4.03518 65 0 60.9706 0 56.0001V50.5377C0 45.5672 4.03518
                    41.5378 9.01283 41.5378H10.0903V31.4737C10.0783 31.3741 10.072 31.2726 10.072 31.1697C10.072
                    29.789 11.1929 28.6697 12.5755 28.6697H42.6287V23.4622H42.2885C37.3109 23.4622 33.2757 19.4328
                    33.2757 14.4623V8.99993C33.2757 4.02937 37.3109 0 42.2885 0ZM37.4637 50.5377C37.4637 47.7763
                    39.7055 45.5377 42.4708 45.5377H48.2625C51.028 45.5377 53.2697 47.7763 53.2697
                    50.5377V56.0001C53.2697 58.7614 51.028 61 48.2625 61H42.4708C39.7055 61 37.4637 58.7614 37.4637
                    56.0001V50.5377ZM9.01283 45.5377C6.24747 45.5377 4.0057 47.7763 4.0057 50.5377V56.0001C4.0057
                    58.7614 6.24747 61 9.01283 61H14.8046C17.5699 61 19.8117 58.7614 19.8117 56.0001V50.5377C19.8117
                    47.7763 17.5699 45.5377 14.8046 45.5377H9.01283Z" fill="#C4C4C4"/>
                    </svg>
                </div>
            </NavLink>
        </div>
    )
}