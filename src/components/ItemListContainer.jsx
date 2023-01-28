import React from 'react'
import {Image, Container} from '@chakra-ui/react'

export default function ItemListContainer() {
  return (
   <Container maxW='sm' size='md' color='blue.600' fontSize='2xl'p="5">
    <Image
      src='https://img.freepik.com/vector-gratis/construccion_23-2147503830.jpg?w=826&t=st=1674869618~exp=1674870218~hmac=cadbee70681eb09607d43be66429142eaee1acc3a3639eb79a4513d3caa94268'
      alt='Sitio en construccion'
      borderRadius='lg'
    />
        <div >Sitio en construccion</div>
   </Container>
    
    
  );
};

