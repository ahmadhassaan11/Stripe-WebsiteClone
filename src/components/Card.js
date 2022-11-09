import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { mobile } from "../responsive"
const Body = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
`
const WrapperOuter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        animation-play-state: paused;
}
`

const animate1 = keyframes`
    0%{
        opacity: 0;
        transform: translateY(300%) scale(0.7);
    }
    5%, 15%{
        opacity: 0.6;
        transform: translateY(200%) scale(0.8);
    }
    20%, 30%{
        opacity: 0.7;
        transform: translateY(100%) scale(0.9);
    }
    35%, 45%{
        opacity: 1;
        pointer-events: auto;
    transform: translateY(0%) scale(1);
}  
50%, 60%{
    opacity: 0.7;
    transform: translateY(-100%) scale(0.9);
}
65%, 75%{
    opacity: 0.6;
    transform: translateY(-200%) scale(0.8);
}
80%, 100%{
    opacity: 0;
    transform: translateY(-300%) scale(0.7);
}
`

const WrapperCard = styled.div`
    background: white;
    width: 540px;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    justify-content: space-between;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    animation: ${animate1} 20s linear infinite ;
    animation-delay: calc(3s * var(--delay));

    &:last-child {animation-delay: -3s;}

    ${mobile({ marginLeft: "250px", width: "340px" })}
`
const CardContent = styled.div`
    display: flex;
    align-items: center;
`
const CardImage = styled.div`
    height: 100px;
    width: 100px;
    position: absolute;
    left: -5px;
    background: #fff;
    border-radius: 10%;
    padding: 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;
`
const CardDetails = styled.div`
    margin-left: 80px;
    color:#425466;
`
const Details = styled.p`
    font-size: 13px;
    padding:0 16px;
`


const Card = () => {
    return (
        <Body>
            <WrapperOuter>

                <WrapperCard style={{ animationDelay: "-9s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/2DVVxQn4IlCpGpTD9buq3A/ad992e555daafbb544702b75483113fb/Jessica_Verrilli.png?q=80&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"We’re delighted to be working with Stripe to make it easier to spend more time working."</Details>
                            <Details><strong>Kat Mañalac</strong> Partner, Y Combinator</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "-6s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/32DTc2ZWeAGrnv1uWf8r4w/6c057d57dc1303cfc6063c07d0742d44/Daniel_Gross.png?q=80&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"Atlas is the perfect way to graduate your project into a real company."</Details>
                            <Details><strong>Daniel Gross,</strong> Founder, Pioneer.app</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "-3s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/206sMPS1XW7rE4EN2vNKLF/485380a923d8df93591686fe6644b0ed/Sarah_Tavel.jpeg?q=80&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details> "Stripe Atlas is the easy button for forming a company.”</Details>
                            <Details><strong>Sarah Tavel,</strong> General Partner, Benchmark</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "0s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/30GRohYvqOZOI6CGbyQOIm/fa0f0e8c5308505e699b4d31a0c45100/Nat_Friedman.jpeg?q=80&fm=webp&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"I will use Atlas for my next company.”</Details>
                            <Details><strong>Nat Friedman,</strong> CEO, GitHub</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "3s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/32O6iNCnSqy8YD54gzjhU0/23b411b0805a187d61b56f0a3b1fd387/Elad_Gill.png?q=80&fm=webp&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"Atlas is what top-tier founders are using today."</Details>
                            <Details><strong>Elad Gil,</strong> Entrepreneur and Investor</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "6s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/4ovfvwwZLmhTW6IVaVCTg1/ed170339909ebadbb9d50495a45beea6/Kat_Manalac.png?q=80&fm=webp&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"Company formation is streamlining the shift toward remote work."</Details>
                            <Details><strong>Jessica Verrilli,</strong> General Partner, GV</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
                <WrapperCard style={{ animationDelay: "9s" }}>
                    <CardContent>
                        <CardImage><Image src="https://images.ctfassets.net/fzn2n1nzq965/7lcGzOAjD6lfI8NhGYhT0j/63be104d860f5c1c1d34434f01a66864/Marc_Andreessen.png?q=80&w=192" alt=""></Image></CardImage>
                        <CardDetails>
                            <Details>"We like investing in companies that are established professionally."</Details>
                            <Details><strong>Marc Andreessen,</strong> Co-Founder, Andreessen Horowitz</Details>
                        </CardDetails>
                    </CardContent>
                </WrapperCard>
            </WrapperOuter>
        </Body>

    )
}

export default Card