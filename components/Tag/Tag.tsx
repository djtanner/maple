import { FC } from "react"
import styles from "./Tag.module.css"

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    radius: string
    width: string;
    textcolor: string;
    padding: string;
    fontsize: string;
  }
  
  export const Tag: FC<Props> = ({ 
      border,
      color,
      children,
      height,
      radius,
      width,
      textcolor,
      padding,
      fontsize

    }) => { 
    return (
      <button 
        style={{
           backgroundColor: color,
           border,
           borderRadius: radius,
           height,
           width,
           color: textcolor,
           padding,
           fontSize: fontsize
        }}
        className={styles.tag}
      >
      {children}
      </button>
    );
  }
  
