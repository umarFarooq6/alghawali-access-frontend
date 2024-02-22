import React, { useEffect, useState } from "react";

const Modal = ({name, showModal, toggleModal, modalTxt, confirmTxt, modalAction}) =>{
    const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass(showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none");
  }, [showModal]);

    return(
        <>
            <div>
                {showModal && (
                    <div
                    id="popup-modal"
                    tabIndex="-1"
                    className={`fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center ${animationClass} transition-opacity duration-300 ease-in-out`}>
                    <div className="absolute inset-0 bg-gray-700 opacity-50" onClick={toggleModal}></div>
                    <div className="relative bg-white rounded-lg shadow w-full max-w-md">
                        <button
                        type="button"
                        className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        data-modal-hide="popup-modal"
                        onClick={toggleModal}
                        >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only" onClick={toggleModal}>Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">

                            <svg className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <path d="M19.4546 53.7826C19.4546 53.3503 19.7048 52.8498 20.1143 52.4176L20.7513 51.7578H53.421C80.5622 51.7578 86.2043 51.8033 86.7048 52.0763C87.0461 52.2356 87.4784 52.7361 87.6604 53.1456C87.9561 53.8736 87.7969 54.8974 85.3171 68.5932C83.861 76.6696 81.7453 88.3861 80.6305 94.6425C79.0835 103.197 78.4464 106.268 78.0597 107.042C77.7639 107.61 77.1042 108.407 76.5809 108.816C76.0576 109.203 75.2386 109.658 74.7609 109.772C74.2376 109.908 66.2977 109.999 32.9683 109.999L31.8308 109.476C31.1938 109.18 30.3748 108.589 29.988 108.156C29.624 107.724 29.1235 106.928 28.9187 106.359C28.714 105.79 26.7347 95.2568 24.5507 82.926L24.4342 82.2753C22.2723 70.1951 20.2907 59.1229 19.9778 57.5137C19.6821 55.8529 19.4318 54.1694 19.4546 53.7826Z" fill="#FF6B6B"/>
                                <path d="M44.8742 11.0126C45.9207 10.7624 47.4678 10.3984 48.2868 10.2391C49.1513 10.0571 50.5846 9.96609 51.8131 10.0116C53.1554 10.0798 54.4749 10.3074 55.6807 10.6714C56.7044 11.0126 58.2287 11.7179 59.207 12.3549C60.1398 12.9692 61.4593 14.0839 62.119 14.812C62.8015 15.5627 63.6888 16.814 64.1211 17.5875C64.5306 18.361 64.9856 18.998 65.1221 18.998C65.2358 18.998 67.3289 18.543 69.7859 17.9743C73.1302 17.2008 74.6773 16.9732 76.0878 16.9732C77.1116 16.9732 78.5221 17.1098 79.2274 17.2918C79.9099 17.4738 81.1384 17.9515 81.9574 18.361C82.9357 18.8388 83.9822 19.6578 85.1652 20.8181C86.4847 22.1376 87.099 22.9566 87.7588 24.3444C88.4185 25.7322 88.646 26.5512 88.7143 27.6432C88.8053 28.9855 88.7371 29.2358 88.1455 30.1458C87.8043 30.7146 87.1445 31.3516 86.7123 31.5563C86.28 31.7838 81.0702 33.0806 75.1323 34.4456C69.1717 35.8334 57.2049 38.609 48.5143 40.611C39.8009 42.6358 29.8589 44.9564 26.3781 45.7526C22.8973 46.5489 19.7122 47.2087 19.28 47.2087C18.825 47.2087 18.1425 47.0722 17.733 46.9129C17.3234 46.7537 16.6637 46.2304 16.2542 45.7754C15.8447 45.3204 15.3897 44.5014 15.2531 43.9781C15.0939 43.4548 14.9801 42.0443 15.0029 40.8385C15.0029 39.246 15.1394 38.3132 15.5034 37.1984C15.7764 36.4022 16.3224 35.1737 16.7092 34.4684C17.0959 33.7859 18.097 32.5573 18.916 31.7383C19.9397 30.7373 20.9408 30.0093 22.1238 29.4405C23.3296 28.849 25.1723 28.2802 33.2715 26.392V24.9814C33.2715 24.2079 33.3625 23.0249 33.499 22.3651C33.6355 21.7054 34.227 20.2038 34.7958 18.998C35.6603 17.2008 36.1153 16.5637 37.6623 15.0167C39.0046 13.7199 40.0056 12.9692 41.2341 12.3549C42.1669 11.8771 43.8049 11.2856 44.8742 11.0126Z" fill="#262F32"/>
                                <path d="M71.2875 43.8188C71.3557 43.3866 72.5615 42.2946 76.2698 39.3142C79.5459 36.6752 81.3432 35.4012 81.7299 35.3784C82.0257 35.3784 82.4124 35.4922 82.5489 35.6742C82.7082 35.8334 82.9584 36.9027 83.4362 40.1788H84.915C85.7112 40.1788 87.0535 40.2698 87.8725 40.4063C88.6688 40.5428 90.1021 40.884 91.0576 41.2025C91.9904 41.4983 93.5829 42.2263 94.5839 42.8178C95.7669 43.5003 97.0637 44.5469 98.3377 45.8209C99.5663 47.0722 100.613 48.4144 101.227 49.5065C101.75 50.4392 102.433 51.9635 102.729 52.8963C103.047 53.8518 103.388 55.1258 103.479 55.7401C103.639 56.8094 103.593 56.9459 102.933 57.6284C102.478 58.1062 102.001 58.3792 101.591 58.3792C101.227 58.3792 100.658 58.1744 100.317 57.9241C99.8165 57.5374 99.6117 57.1279 99.316 55.6946C99.1112 54.7163 98.5425 53.101 98.042 52.1C97.3367 50.735 96.6769 49.8477 95.2892 48.4599C93.9241 47.1177 92.9914 46.4124 91.7401 45.7981C90.7846 45.3431 89.3513 44.7971 88.555 44.6151C87.736 44.4331 86.3938 44.2738 84.1187 44.2738L84.3917 46.3214C84.5965 47.7092 84.5965 48.5054 84.46 48.8012C84.3235 49.0742 84.0505 49.3245 83.823 49.3927C83.5955 49.4382 80.8199 48.4599 77.6348 47.2087C74.427 45.9574 71.697 44.7971 71.515 44.6379C71.3557 44.5014 71.2647 44.1146 71.2875 43.8188Z" fill="#262F32"/>
                                <path d="M43.6578 17.7014C44.4086 17.2919 46.0921 16.7004 47.3889 16.3819C49.1862 15.9724 50.2555 15.8359 51.5977 15.8814C52.8718 15.9269 53.759 16.1089 54.5553 16.4502C55.1923 16.7232 56.1023 17.2464 56.5801 17.5649C57.0806 17.9062 57.8313 18.657 58.2409 19.2257C58.6731 19.7717 59.0144 20.3178 59.0144 20.4088C58.9916 20.4998 58.8551 20.5908 58.6504 20.5908C58.4684 20.5908 54.123 21.5463 48.9814 22.7521C43.8626 23.9351 39.54 24.8906 39.3807 24.8906C39.1532 24.8906 39.1305 24.6176 39.267 23.8213C39.358 23.2298 39.6765 22.2288 39.9723 21.6145C40.268 20.9775 40.905 19.9992 41.4055 19.4532C41.906 18.8845 42.9298 18.0882 43.6578 17.7014Z" fill="#F2F5FF"/>
                                <path d="M37.72 71.4381L41.0188 68.0711C43.9308 65.1362 44.4313 64.7267 45.0684 64.7267C45.4779 64.7267 46.0921 64.8632 46.4334 65.0452C46.7746 65.2272 48.5492 66.8653 53.6453 71.9841L57.1716 68.5033C59.1281 66.5695 60.9027 64.9315 61.1529 64.8405C61.4259 64.7495 61.9719 64.7267 62.4042 64.795C63.064 64.9087 63.8147 65.5457 69.6843 71.4381L69.6616 73.7132L62.5179 80.8796L69.6616 88.046L69.6843 90.321L66.4538 93.5516C64.1332 95.8722 63.0185 96.8504 62.5179 96.9414C62.1539 97.0097 61.5852 96.9869 61.2667 96.8959C60.9709 96.8049 59.1281 95.1669 53.6453 89.7523L50.3465 93.0511C48.5492 94.8711 46.7746 96.5092 46.4334 96.6912C46.0921 96.8732 45.4779 97.0097 45.0684 97.0097C44.4313 97.0097 43.9081 96.6002 41.178 93.8929C39.4262 92.1638 37.8792 90.4575 37.7427 90.0935C37.5835 89.7068 37.5152 89.0925 37.5607 88.7285C37.6517 88.2052 38.6072 87.0905 44.7726 80.8568L37.629 73.7132L37.72 71.4381Z" fill="#F2F5FF"/>
                            </svg>
                            
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                {modalTxt ? modalTxt : (
                                    <span>
                                    Are you sure you want to delete{' '}
                                    {name ? (
                                        <span className="text-xl font-bold text-gray-600">{name}</span>
                                    ) : (
                                        ''
                                    )}{' '}
                                    ?
                                    </span>
                                )}
                            </h3>

                            <button onClick={toggleModal} data-modal-hide="popup-modal" type="button" className="me-2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                            <button onClick={modalAction ? modalAction : ''} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                {confirmTxt ? confirmTxt : "Yes, I'm sure"}
                            </button>
                        
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Modal;