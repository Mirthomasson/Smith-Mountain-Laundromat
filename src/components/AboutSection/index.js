import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, } from './AboutElements';

const AboutSection = () => {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            TopLine
                        </TopLine>
                        <Heading>Headline</Heading>
                        <Subtitle>Subtitle</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
      
    </>
  )
}

export default AboutSection;
