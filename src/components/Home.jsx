import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://media.istockphoto.com/id/1292193960/es/vector/ilustraci%C3%B3n-realista-del-globo-terrestre.jpg?s=1024x1024&w=is&k=20&c=e-F0SqnswElNxLUqtklP9WD4571BUmag1UIoM4J9t2c="
            alt="tierra"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;