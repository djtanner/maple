import { FC } from "react"
import styles from "./Tag.module.css"

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    width: string;
    textcolor: string;
    fontsize: string;
  }
  
  export const Tag: FC<Props> = ({ 
      border,
      color,
      children,
      width,
      textcolor,
      fontsize

    }) => { 
    return (
      <button 
        style={{
           backgroundColor: color,
           border,
           width,
           color: textcolor,
           fontSize: fontsize
        }}
        className={styles.tag}
      >
      {children}
      </button>
    );
  }
  
