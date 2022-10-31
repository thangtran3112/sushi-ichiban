import React from "react"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core"

const MediaCard = ({ Image, text, onClick }) => {
  return (
    <Card>
      <CardMedia src={Image} image={Image} />
      <CardContent>
        <Typography variant="subtitle2">{text}</Typography>
      </CardContent>
    </Card>
  )
}

export default MediaCard
