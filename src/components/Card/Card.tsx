import type React from "react"
import styles from "./Card.module.css"

interface CardProps {
  className?: string
  color: string
  width: string
  height: string
  image?: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ className, color, width, height, image, children }) => {
  const cardStyle = {
    backgroundColor: color,
    width: width,
    height: height,
  }

  return (
    <div className={`${styles.card} ${styles[className ?? ""]}`} style={cardStyle}>
      {children}
      {image && <img src={image || "/placeholder.svg"} alt="Character" className={styles.cardImage} />}
    </div>
  )
}

export default Card

