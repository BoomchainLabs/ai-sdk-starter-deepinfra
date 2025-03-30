import Link from "next/link";
import * as React from "react";
import type { SVGProps } from "react";

export const VercelIcon = ({ size = 17 }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SpinnerIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <g clipPath="url(#clip0_2393_1490)">
      <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5" />
      <path
        opacity="0.5"
        d="M8 16V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.9"
        d="M3.29773 1.52783L5.64887 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.1"
        d="M12.7023 1.52783L10.3511 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.4"
        d="M12.7023 14.472L10.3511 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M3.29773 14.472L5.64887 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.2"
        d="M15.6085 5.52783L11.8043 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.7"
        d="M0.391602 10.472L4.19583 9.23598"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.3"
        d="M15.6085 10.4722L11.8043 9.2361"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.8"
        d="M0.391602 5.52783L4.19583 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_2393_1490">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

export function StarButton() {
  return (
    <Link
      href="https://github.com/vercel-labs/ai-sdk-preview-reasoning"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300"
    >
      <Github className="size-4" />
      <span className="hidden sm:inline">Star on GitHub</span>
    </Link>
  );
}

export const deepInfraLogo = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      width={3 * size}
      height={0.75 * size}
      viewBox="0 0 193 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1577 18.9208C9.59566 18.9208 8.32422 17.6494 8.32422 16.0874C8.32422 14.5253 9.59566 13.2539 11.1577 13.2539C12.7197 13.2539 13.9911 14.5253 13.9911 16.0874C13.9911 17.6494 12.7197 18.9208 11.1577 18.9208ZM11.1577 14.3664C10.2089 14.3664 9.43673 15.1386 9.43673 16.089C9.43673 17.0393 10.2089 17.8115 11.1577 17.8115C12.1064 17.8115 12.8802 17.0393 12.8802 16.089C12.8802 15.1386 12.108 14.3664 11.1577 14.3664Z"
        fill="#2A3275"
      />
      <path
        d="M11.1577 26.913C9.59566 26.913 8.32422 25.6415 8.32422 24.0795C8.32422 22.5175 9.59566 21.2461 11.1577 21.2461C12.7197 21.2461 13.9911 22.5175 13.9911 24.0795C13.9911 25.6415 12.7197 26.913 11.1577 26.913ZM11.1577 22.3586C10.2089 22.3586 9.43673 23.1308 9.43673 24.0795C9.43673 25.0283 10.2089 25.8021 11.1577 25.8021C12.1064 25.8021 12.8802 25.0299 12.8802 24.0795C12.8802 23.1292 12.108 22.3586 11.1577 22.3586Z"
        fill="#2A3275"
      />
      <path
        d="M11.1577 34.9013C9.59566 34.9013 8.32422 33.6298 8.32422 32.0678C8.32422 30.5058 9.59566 29.2344 11.1577 29.2344C12.7197 29.2344 13.9911 30.5058 13.9911 32.0678C13.9911 33.6298 12.7197 34.9013 11.1577 34.9013ZM11.1577 30.3469C10.2089 30.3469 9.43673 31.1191 9.43673 32.0694C9.43673 33.0198 10.2089 33.792 11.1577 33.792C12.1064 33.792 12.8802 33.0198 12.8802 32.0694C12.8802 31.1191 12.108 30.3469 11.1577 30.3469Z"
        fill="#2A3275"
      />
      <path
        d="M32.6997 18.9208C31.1377 18.9208 29.8662 17.6494 29.8662 16.0874C29.8662 14.5253 31.1377 13.2539 32.6997 13.2539C34.2617 13.2539 35.5331 14.5253 35.5331 16.0874C35.5331 17.6494 34.2617 18.9208 32.6997 18.9208ZM32.6997 14.3664C31.7509 14.3664 30.9771 15.1386 30.9771 16.089C30.9771 17.0393 31.7493 17.8115 32.6997 17.8115C33.65 17.8115 34.4222 17.0393 34.4222 16.089C34.4222 15.1386 33.65 14.3664 32.6997 14.3664Z"
        fill="#2A3275"
      />
      <path
        d="M32.6997 26.913C31.1377 26.913 29.8662 25.6415 29.8662 24.0795C29.8662 22.5175 31.1377 21.2461 32.6997 21.2461C34.2617 21.2461 35.5331 22.5175 35.5331 24.0795C35.5331 25.6415 34.2617 26.913 32.6997 26.913ZM32.6997 22.3586C31.7509 22.3586 30.9771 23.1308 30.9771 24.0795C30.9771 25.0283 31.7493 25.8021 32.6997 25.8021C33.65 25.8021 34.4222 25.0299 34.4222 24.0795C34.4222 23.1292 33.65 22.3586 32.6997 22.3586Z"
        fill="#2A3275"
      />
      <path
        d="M32.6997 34.9013C31.1377 34.9013 29.8662 33.6298 29.8662 32.0678C29.8662 30.5058 31.1377 29.2344 32.6997 29.2344C34.2617 29.2344 35.5331 30.5058 35.5331 32.0678C35.5331 33.6298 34.2617 34.9013 32.6997 34.9013ZM32.6997 30.3469C31.7509 30.3469 30.9771 31.1191 30.9771 32.0694C30.9771 33.0198 31.7493 33.792 32.6997 33.792C33.65 33.792 34.4222 33.0198 34.4222 32.0694C34.4222 31.1191 33.65 30.3469 32.6997 30.3469Z"
        fill="#2A3275"
      />
      <path
        d="M21.9291 22.9169C20.3671 22.9169 19.0957 21.6455 19.0957 20.0834C19.0957 18.5214 20.3671 17.25 21.9291 17.25C23.4912 17.25 24.7626 18.5214 24.7626 20.0834C24.7626 21.6455 23.4912 22.9169 21.9291 22.9169ZM21.9291 18.3625C20.9804 18.3625 20.2066 19.1347 20.2066 20.0851C20.2066 21.0354 20.9788 21.8076 21.9291 21.8076C22.8795 21.8076 23.6517 21.0354 23.6517 20.0851C23.6517 19.1347 22.8795 18.3625 21.9291 18.3625Z"
        fill="#2A3275"
      />
      <path
        d="M21.9296 14.9286C20.3676 14.9286 19.0962 13.6572 19.0962 12.0952C19.0962 10.5332 20.3676 9.26172 21.9296 9.26172C23.4916 9.26172 24.7631 10.5332 24.7631 12.0952C24.7631 13.6572 23.4916 14.9286 21.9296 14.9286ZM21.9296 10.3742C20.9809 10.3742 20.2071 11.1464 20.2071 12.0968C20.2071 13.0471 20.9793 13.8193 21.9296 13.8193C22.88 13.8193 23.6522 13.0471 23.6522 12.0968C23.6522 11.1464 22.88 10.3742 21.9296 10.3742Z"
        fill="#2A3275"
      />
      <path
        d="M21.9296 30.9091C20.3676 30.9091 19.0962 29.6376 19.0962 28.0756C19.0962 26.5136 20.3676 25.2422 21.9296 25.2422C23.4916 25.2422 24.7631 26.5136 24.7631 28.0756C24.7631 29.6376 23.4916 30.9091 21.9296 30.9091ZM21.9296 26.3547C20.9809 26.3547 20.2071 27.1269 20.2071 28.0772C20.2071 29.0276 20.9793 29.7998 21.9296 29.7998C22.88 29.7998 23.6522 29.0276 23.6522 28.0772C23.6522 27.1269 22.88 26.3547 21.9296 26.3547Z"
        fill="#2A3275"
      />
      <path
        d="M21.9291 38.9013C20.3671 38.9013 19.0957 37.6298 19.0957 36.0678C19.0957 34.5058 20.3671 33.2344 21.9291 33.2344C23.4912 33.2344 24.7626 34.5058 24.7626 36.0678C24.7626 37.6298 23.4912 38.9013 21.9291 38.9013ZM21.9291 34.3469C20.9804 34.3469 20.2066 35.1191 20.2066 36.0694C20.2066 37.0198 20.9788 37.792 21.9291 37.792C22.8795 37.792 23.6517 37.0198 23.6517 36.0694C23.6517 35.1191 22.8795 34.3469 21.9291 34.3469Z"
        fill="#2A3275"
      />
      <path
        d="M17.417 19.4154C17.3031 19.4154 17.1875 19.3945 17.0751 19.3495L15.2305 18.6143C14.7554 18.4249 14.5242 17.8855 14.7136 17.4119C14.9031 16.9367 15.4408 16.7039 15.9176 16.895L17.7622 17.6302C18.2374 17.8196 18.4685 18.359 18.2791 18.8326C18.1346 19.1954 17.7863 19.4154 17.4186 19.4154H17.417Z"
        fill="#5699DB"
      />
      <path
        d="M17.417 27.2506C17.3031 27.2506 17.1875 27.2298 17.0751 27.1848L15.2305 26.4496C14.7554 26.2601 14.5242 25.7207 14.7136 25.2471C14.9031 24.772 15.4408 24.5408 15.9176 24.7302L17.7622 25.4655C18.2374 25.6549 18.4685 26.1943 18.2791 26.6679C18.1346 27.0307 17.7863 27.2506 17.4186 27.2506H17.417Z"
        fill="#5699DB"
      />
      <path
        d="M28.2373 23.3366C28.1234 23.3366 28.0078 23.3157 27.8954 23.2707L26.0509 22.5355C25.5757 22.3461 25.3445 21.8067 25.5339 21.3331C25.7234 20.8579 26.2612 20.6267 26.7363 20.8162L28.5809 21.5514C29.0561 21.7408 29.2872 22.2802 29.0978 22.7538C28.9533 23.1166 28.605 23.3366 28.2373 23.3366Z"
        fill="#5699DB"
      />
      <path
        d="M28.2373 15.4974C28.1234 15.4974 28.0078 15.4765 27.8954 15.4316L26.0509 14.6963C25.5757 14.5069 25.3445 13.9675 25.5339 13.4939C25.7234 13.0187 26.2612 12.7859 26.7363 12.977L28.5809 13.7122C29.0561 13.9017 29.2872 14.4411 29.0978 14.9146C28.9533 15.2775 28.605 15.4974 28.2373 15.4974Z"
        fill="#5699DB"
      />
      <path
        d="M28.2369 31.1693C28.1229 31.1693 28.0073 31.1484 27.8949 31.1034L26.0504 30.3682C25.5752 30.1788 25.344 29.6394 25.5334 29.1658C25.7229 28.6906 26.2607 28.4578 26.7359 28.6489L28.5804 29.3841C29.0556 29.5735 29.2868 30.1129 29.0973 30.5865C28.9528 30.9493 28.6045 31.1693 28.2369 31.1693Z"
        fill="#5699DB"
      />
      <path
        d="M15.6224 31.4498C15.2548 31.4498 14.9064 31.2299 14.762 30.8671C14.5725 30.3919 14.8037 29.8541 15.2789 29.6647L17.1234 28.9294C17.5986 28.74 18.1364 28.9712 18.3274 29.4464C18.5169 29.9216 18.2857 30.4593 17.8105 30.6488L15.966 31.384C15.8536 31.429 15.738 31.4498 15.624 31.4498H15.6224Z"
        fill="#5699DB"
      />
      <path
        d="M15.6224 23.6608C15.2548 23.6608 14.9064 23.4408 14.762 23.078C14.5725 22.6029 14.8037 22.0651 15.2789 21.8756L17.1234 21.1404C17.5986 20.9509 18.1364 21.1821 18.3274 21.6573C18.5169 22.1325 18.2857 22.6703 17.8105 22.8597L15.966 23.595C15.8536 23.6399 15.738 23.6608 15.624 23.6608H15.6224Z"
        fill="#5699DB"
      />
      <path
        d="M15.6224 15.4772C15.2548 15.4772 14.9064 15.2573 14.762 14.8944C14.5725 14.4193 14.8037 13.8815 15.2789 13.692L17.1234 12.9568C17.5986 12.7674 18.1364 12.9985 18.3274 13.4737C18.5169 13.9489 18.2857 14.4867 17.8105 14.6761L15.966 15.4114C15.8536 15.4563 15.738 15.4772 15.624 15.4772H15.6224Z"
        fill="#5699DB"
      />
      <path
        d="M17.417 35.6456C17.3031 35.6456 17.1875 35.6247 17.0751 35.5798L15.2305 34.8445C14.7554 34.6551 14.5242 34.1157 14.7136 33.6421C14.9031 33.1686 15.4408 32.9342 15.916 33.1252L17.7606 33.8605C18.2358 34.0499 18.4669 34.5893 18.2775 35.0629C18.133 35.4257 17.7847 35.6456 17.417 35.6456Z"
        fill="#5699DB"
      />
      <path
        d="M26.3925 19.4163C26.0248 19.4163 25.6765 19.1964 25.532 18.8336C25.3426 18.3584 25.5737 17.819 26.0489 17.6295L27.8935 16.8943C28.3686 16.7049 28.908 16.936 29.0975 17.4112C29.2869 17.8864 29.0557 18.4258 28.5805 18.6152L26.736 19.3505C26.6236 19.3954 26.508 19.4163 26.3941 19.4163H26.3925Z"
        fill="#5699DB"
      />
      <path
        d="M26.3925 27.2522C26.0248 27.2522 25.6765 27.0323 25.532 26.6695C25.3426 26.1943 25.5737 25.6549 26.0489 25.4655L27.8935 24.7302C28.3686 24.5408 28.908 24.772 29.0975 25.2471C29.2869 25.7223 29.0557 26.2617 28.5805 26.4512L26.736 27.1864C26.6236 27.2314 26.508 27.2522 26.3941 27.2522H26.3925Z"
        fill="#5699DB"
      />
      <path
        d="M26.3925 35.6452C26.0248 35.6452 25.6765 35.4236 25.532 35.0624C25.3426 34.5872 25.5737 34.0494 26.0489 33.86L27.8935 33.1248C28.3686 32.9353 28.9064 33.1665 29.0959 33.6417C29.2853 34.1169 29.0541 34.6547 28.5789 34.8441L26.7344 35.5793C26.622 35.6243 26.5064 35.6452 26.3925 35.6452Z"
        fill="#5699DB"
      />
      <path
        d="M57.4715 9.26172V32.6083H53.9959L53.7519 30.5358C52.5928 32.3354 50.7338 32.9439 48.9054 32.9439C44.4842 32.9439 41.1611 30.0173 41.1611 25.0792C41.1611 19.8972 44.4232 17.2146 48.8138 17.2146C50.3983 17.2146 52.869 18.0687 53.7519 19.6227V11.3005L57.4715 9.26332V9.26172ZM44.8807 25.0776C44.8807 27.6992 46.7702 29.4988 49.1494 29.4988C51.5285 29.4988 53.5095 27.7907 53.5095 25.0776C53.5095 22.3646 51.498 20.687 49.1494 20.687C46.8007 20.687 44.8807 22.3646 44.8807 25.0776Z"
        fill="currentColor"
      />
      <path
        d="M64.2088 26.4193C64.4528 28.2783 66.0678 29.6204 68.6893 29.6204C70.0619 29.6204 71.8599 29.1018 72.7139 28.2173L75.0915 30.5643C73.5054 32.2098 70.9143 33.0028 68.6283 33.0028C63.4462 33.0028 60.3672 29.8018 60.3672 24.9857C60.3672 20.1697 63.4767 17.1211 68.3554 17.1211C73.2341 17.1211 76.525 20.2307 75.9455 26.4193H64.2088ZM72.3784 23.3402C72.1344 21.3897 70.6109 20.4137 68.4758 20.4137C66.4643 20.4137 64.8172 21.3897 64.2682 23.3402H72.3768H72.3784Z"
        fill="currentColor"
      />
      <path
        d="M81.9822 26.4193C82.2262 28.2783 83.8412 29.6204 86.4628 29.6204C87.8353 29.6204 89.6333 29.1018 90.4874 28.2173L92.8649 30.5643C91.2788 32.2098 88.6878 33.0028 86.4018 33.0028C81.2197 33.0028 78.1406 29.8018 78.1406 24.9857C78.1406 20.1697 81.2502 17.1211 86.1289 17.1211C91.0075 17.1211 94.2985 20.2307 93.719 26.4193H81.9822ZM90.1519 23.3402C89.9079 21.3897 88.3844 20.4137 86.2493 20.4137C84.2378 20.4137 82.5907 21.3897 82.0416 23.3402H90.1503H90.1519Z"
        fill="currentColor"
      />
      <path
        d="M96.5854 38.8871V17.5777L100.305 19.6502C101.464 17.9742 103.476 17.2422 105.182 17.2422C109.817 17.2422 112.896 20.6873 112.896 25.1068C112.896 29.5263 110.122 32.973 105.304 32.973C103.72 32.973 101.371 32.485 100.305 30.8395V38.8871H96.5854ZM109.176 25.1068C109.176 22.7598 107.592 20.8398 104.908 20.8398C102.223 20.8398 100.639 22.7598 100.639 25.1068C100.639 27.4538 102.378 29.3754 104.908 29.3754C107.438 29.3754 109.176 27.4554 109.176 25.1068Z"
        fill="currentColor"
      />
      <path
        d="M119.693 11.9025C119.693 14.7986 115.303 14.7986 115.303 11.9025C115.303 9.00646 119.693 9.00646 119.693 11.9025Z"
        fill="#2A3275"
      />
      <path
        d="M119.358 17.5156H115.638V32.6059H119.358V17.5156Z"
        fill="#2A3275"
      />
      <path
        d="M133.777 32.6092V24.7446C133.777 22.4586 132.526 20.72 130.149 20.72C127.771 20.72 126.307 22.64 126.307 24.9276V32.6109H122.618V17.5494L126.185 19.5915C127.71 18.0969 129.234 17.3359 131.123 17.3359C134.66 17.3359 137.495 19.988 137.495 24.7141V32.6109H133.775L133.777 32.6092Z"
        fill="#2A3275"
      />
      <path
        d="M141.918 32.6083V21.0546H139.113V17.7925H141.918V16.786C141.918 12.7613 144.631 10.9023 147.649 10.9023C148.961 10.9023 150.331 11.3294 151.552 12.1224L150.179 14.8965C149.386 14.3779 148.654 14.1034 147.893 14.1034C146.612 14.1034 145.637 14.9575 145.637 16.786V17.7925H150.059V21.0546H145.637V32.6083H141.918Z"
        fill="#2A3275"
      />
      <path
        d="M156.398 19.3171C157.557 17.4565 159.111 17.1836 160.636 17.1836C162.161 17.1836 163.685 17.7936 164.508 18.6172L162.83 21.8487C162.068 21.2082 161.366 20.8727 160.148 20.8727C158.197 20.8727 156.398 21.9097 156.398 24.6838V32.6094H152.678V17.5801L156.398 19.3187V19.3171Z"
        fill="#2A3275"
      />
      <path
        d="M177.708 19.6482L181.397 17.5756V32.6049H177.891L177.708 30.4104C176.854 32.1779 174.506 33.032 172.83 33.0625C168.379 33.093 165.088 30.3494 165.088 25.0758C165.088 19.8023 168.533 17.1791 172.922 17.2112C174.934 17.2112 176.855 18.1568 177.708 19.6498V19.6482ZM168.806 25.0742C168.806 27.9398 170.787 29.6479 173.256 29.6479C179.109 29.6479 179.109 20.5327 173.256 20.5327C170.787 20.5327 168.806 22.2087 168.806 25.0758"
        fill="#2A3275"
      />
    </svg>
  );
};

