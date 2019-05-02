import styled from 'styled-components';

export const BlogItem = styled.div`
        width: 95%;
        position: relative;
        max-width: 1500px;
        background: #ffffff;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 25px;
        border-radius: 25px;
        height: auto;
        transition: all .3s;
        margin: auto auto 50px;
    
        &:nth-child(even) {
            .image {
                order: 2;
            }
        }
    
        @media screen and (max-width: 992px) {
            max-width: 680px;
            height: 400px;
        }
    
        @media screen and (max-width: 768px) {
            min-height: 500px;
            height: auto;
            margin: 180px auto;
        }
    
    
        @media screen and (max-height: 500px) and (min-width: 992px) {
            height: auto;
        }
    
        .wrapper {
            display: flex;
            align-items: center;
        
            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
        
        }
        
        
        &.details{
            flex-direction: column;
            margin-top: 150px;
            .wrapper{
                flex-wrap: wrap;
                
            }
        }
        
    

`;

export const ImageContainer = styled.div`
        width: 300px;
        height: 300px;
        flex-shrink: 0;
        height: 300px;
        box-shadow: 4px 13px 30px 1px rgba(13, 26, 95, 0.2);
        border-radius: 20px;
        transform:  rotate(45deg);
        border:3px solid #0d245f;
        background-color: #fff;
        
        .details &{
            border:none;
            transform:  rotate(0deg);
            width: 100%;
            transform: translateY(-200px);
           height: auto;
          
        }
        
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            opacity: 0.8;
        }
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 1;
            border-radius: 20px;
            transition: all .3s;
            transform:rotate(-45deg);
            position: relative;
            z-index: 99;
            .details &{
                transform:rotate(0deg);
                height: auto;
                max-height: 500px;
                max-width: 100%;
                
            }
        }
        
        
        @media screen and (max-width: 992px) {
            // width: 45%;
        }
        @media screen and (max-width: 768px) {
            transform: translateY(-50%);
            width: 90%;
        }
        @media screen and (max-width: 576px) {
            width: 95%;
        }
        @media screen and (max-height: 500px) and (min-width: 992px) {
            //height: 270px;
        }
`;

export const BlogIgemContent = styled.div`
    padding-right: 100px;
    padding-left: 100px;
    width: 100%;
    @media screen and (max-width: 992px) {
        // width: 55%;
    }
    @media screen and (max-width: 768px) {
        margin-top: -80px;
        text-align: center;
        padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
        padding: 0
    }
    
    > * {
        opacity: 1;
        transition: all .4s;
        
    }
    .details &{
    margin-top: -150px;
    }
`;

export const BlogItemDate = styled.span`
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
    .details &{
        text-align: center;
    }
`;

export const BlogItemTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
    .details &{
        text-align: center;
         font-size: 30px;
    }
`;

export const BlogItemText = styled.div`
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
    
    .language-text{
        background: #b32724;
        border-radius: 5px;
        color: #fff;
        padding: 0 6px 3px;
    }
    
    .details &{     
         font-size: 20px;
    }
   
`;

export const BlogItemButton = styled.a`
    display: inline-flex;
    background-image: linear-gradient(147deg,#0d245f 0%,#b32724 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    cursor:pointer;
    transition:all 0.3s;
    
    &:hover{
    box-shadow: 0px 0px 10px #0d245f;
    }
    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;