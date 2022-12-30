import React from 'react';
import { Container } from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type AssetType = {
    image: string,
    name: string,
    description: string,
    model: string,
    owner: string,
    status: string,
    healthLevel: string,
}

const Asset = (props: AssetType) => {

    return (
        <Container>
            <Card sx={{ wordWrap: "break-word", minWidth: 275, borderRadius: "15px" }}>
                <CardContent style={{textAlign: "center"}}>
                    <img style={{width: "200px"}}src={props.image} alt={props.name}/>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.model}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.owner}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.status}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        {props.healthLevel}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Asset;