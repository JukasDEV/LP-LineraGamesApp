export default function FirstSection(){
    return (
        <>
        <div className="w-full">
            <div className="inset-x-0 max-w-7xl mx-auto h-[1500px] lg:h-[1050px] top-0 -z-10 overflow-hidden">
                
                <div className="absolute w-full h-full bg-repeat bg-[length:800px] lg:bg-[length:900px] background-animation" style={{
                    backgroundImage: "url('/background.png')",
                }}>
                    
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
                animation: backgroundScroll 30s linear infinite;
                background-size: 50%;
                background-repeat: repeat;
            }
           `}
        </style>
        </>
    )
}