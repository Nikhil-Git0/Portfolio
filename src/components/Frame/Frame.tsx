import type React from "react"
import Card from "../Card/Card"
import styles from "./Frame.module.css"

interface Box {
  className?: string
  color: string
  width: string
  height: string
  image?: string
  children?: React.ReactNode
}

interface FrameProps {
  boxes: Box[]
}

const Frame: React.FC<FrameProps> = ({ boxes }) => {
  return (
    <div className={styles.frame}>
      {boxes.map((box, index) => (
        <Card
          key={index}
          className={box.className}
          color={box.color}
          width={box.width}
          height={box.height}
          image={box.image}
        >
          {box.children}
        </Card>
      ))}
    </div>
  )
}

export default Frame

