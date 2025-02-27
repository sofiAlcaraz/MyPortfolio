import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

export default function CardInfo() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/images/trabajadora.jpg"
            alt="Trabajadora"
            title="Yo trabajando"
            sx={{ maxHeight: "50rem" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ticmas, Buenos Aires— Desarrolladora FullStack
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              MARZO DE 2022 - JULIO DE 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desarrolladora FullStack de la biblioteca “bidi” de ticmas, tuve
              tareas tanto front como back en distintos proyectos de la
              empresas, aprendi distintos lenguajes, algunos mas que otros.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Leer Mas
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
