import { Button } from "@/components/ui/button";
import IphoneComponent from "./iphone-component";

export default function FirstSection(){
    return (
        <>
        <div className="w-full">
            <div className="inset-x-0 lg:h-[1050px] top-0 overflow-hidden h-full">
                
                <div className="w-full h-full bg-repeat bg-[length:1000px] lg:bg-[length:1000px] background-animation" style={{
                    backgroundImage: "url('/background.png')",
                }}>
                    <IphoneComponent/>
                </div>
            </div>
            
        </div>
        <style>
           {`
            @keyframes backgroundScroll {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 200% 200%;
                }
            }

            .background-animation {
                animation: backgroundScroll 50s linear infinite;
                background-size: 50%;
                background-repeat: repeat;
            }
           `}
        </style>
        </>
    )
}