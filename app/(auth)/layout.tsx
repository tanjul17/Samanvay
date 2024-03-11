import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center">
            <div className="justify-center overflow-hidden ">
            {children}
            </div>
        </div>
    )
}
export default layout