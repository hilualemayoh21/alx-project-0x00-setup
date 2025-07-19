import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({
    title,
    size = "medium",
    shape = "rounded-md",
    onClick,
    className =""
}) =>{
   const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium:"px-4 py-2 text-base", 
    large:"px-6 py-3 text-lg"
   }
 const shapeClasses = {
     "rounded-sm" : "rounded-sm",
     "rounded-md" : "rounded-md",
     "rounded-full": "rounded-full"
 }

    return (
        <button onClick={onClick}
        className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}>{title}</button>
    )
}

export default Button