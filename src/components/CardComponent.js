import { Button, ButtonGroup, Image, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from "@chakra-ui/react";

const CardComponent = ({ propText, propImage, propName }) => {
    return (
        <Card maxW='sm' height="800" margin={10} boxShadow="2px 5px 10px black">
            <CardBody>
                <Image margin={"0"}
                    width={"400"}
                    height={"400"}
                    src={propImage}
                    borderRadius='lg'
                />
                <Stack mt='3' spacing='1'>
                    <Heading size='md'>{propName}</Heading>
                    <Text>
                        {propText}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='3'>
                    <Button variant='solid' colorScheme='blue' marginLeft={"4"}>
                        Clique aqui
                        para saber mais
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card >
    )
}
export default CardComponent;