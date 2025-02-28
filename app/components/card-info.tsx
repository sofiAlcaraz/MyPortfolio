import Box, { BoxProps } from "@mui/material/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type CustomCardInfoProps = {
  image: string;
  alt: string;
  titleImage: string;
  titleCard: string;
  textSecondaryCard: string;
  bodiCard: string;
  buttonPage: string;
} & BoxProps;

const CardInfo: React.FC<CustomCardInfoProps> = ({
  image,
  alt,
  titleImage,
  titleCard,
  textSecondaryCard,
  bodiCard,
  buttonPage,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/images/trabajadora.jpg"
            alt="Trabajadora"
            title="Yo trabajando"
            sx={{ maxHeight: "30rem" }}
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
};

export default CardInfo;
