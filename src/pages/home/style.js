import styled from 'styled-components';


export const HomeWrapper = styled.div  `
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .front-side{
        height: 32.8125rem;
        width: 21.96875rem;
        padding: 0;
        border-radius: 1.5rem;
        box-shadow:none;
        position: absolute;
        left:0px;
        right: 0px;
        top:0px;
        bottom: 0px;
        margin:auto;
    }
    .back-side{
        width: 21.96875rem;
        height: 32.8125rem;
        padding: 0;
        border-radius: 1.5rem;
        position: absolute;
        left:0px;
        right: 0px;
        top:0px;
        bottom: 0px;
        margin:auto;
    }
`;

export const KingWrapper = styled.div`
    height: 32.8125rem;
    width:  100%;
    background: #8e090e;
    border-radius: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 95% 85%;
`;

export const AngelWrapper = styled.div`
    height: 32.8125rem;
    width:  100%;
    background: #8e090e;
    border-radius: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 95% 85%;
`;

export const KingTop = styled.div`
    height: 8.6rem;
    width: 100%;
    margin: 0 0;
    .avatar-info{
        font-weight:800;
        font-size: 1.125rem;
        color: rgb(255,199,77);
        float: left;
        margin: 4rem 0 0 1.90625rem;
        font-family: PingFang-SC-Bold;
        .last{
            background-repeat: no-repeat;
            text-align: center;
            background-size: 100% 100%;
            line-height: 3rem; 
            margin: 1.5rem 0 0 0;
            height: 3rem;

        }
    }
    .role{
        font-family: PingFang-SC-Bold;
        color: rgb(255,199,77);    
        font-size: 1.78125rem;
        margin-top: 1.34375rem;
    }
`;

export const Avatar = styled.div`
    float: left;
    width: 7.875rem;
    height: 8.34375rem;
    background-repeat:no-repeat; 
    background-size:100% 100%;
    margin: 2.3125rem 0 0 2.3125rem;
`;

export const Info = styled.div`
    width: 100%;
    height: 10rem;
    margin: 3.4rem 0 0 0;
    .wish-info{
        padding: 0 2.59375rem;
        width: 100%;
        font-size: 1.125rem;
        color: rgb(255,255,255);
        font-family: PingFang-SC-Bold;
        .wish{
            height: 5rem;
            margin: 1rem 0 0 0;
            font-size: 1.125rem;
        }
`;

export const AppleInfo = styled.div`
    color: #ffffff;
    text-align: left;
    padding: 0 2.59375rem;
    font-family: PingFang-SC-Bold;
    font-size: 1.21875rem;
    line-height: 0.99rem;
    .apple-icons{
        height: 1.21875rem;
        width: 1.125rem;
        margin: 0 0.2rem;
        vertical-align: bottom;
    }
`;

export const TodayTask = styled.div`
    width: 6.71875rem;
    height: 3rem;
    float: left;
    position: fixed
    text-align: center;
    line-height: 3rem;
    border-radius: 0.5rem;
    left: 2.71875rem;
    bottom: 2.1875rem;
    color: #ffffff;
    background-repeat:no-repeat; 
    background-size:100% 100%;
    font-family: PingFang-SC-Bold;
    font-size: 1.125rem;
`;

export const ToChat = styled.div`
    width: 6.71875rem;
    height: 3rem;
    float: right;
    position: fixed
    text-align: center;
    line-height: 3rem;
    border-radius: 0.5rem;
    bottom: 2.1875rem;
    right: 2.71875rem;
    color: #ffffff;
    background-repeat:no-repeat; 
    background-size:100% 100%;
    font-family: PingFang-SC-Bold;
    font-size: 1.125rem;
    .have-msg{
        width: 0.7rem;
        height: 0.7rem;   
        position: absolute;
        margin: 0.6rem 0 0 5.2rem;  
        background-color:#8e090e;      
        border-radius: 50%;      
        -moz-border-radius: 50%;      
        -webkit-border-radius: 50%
    }
`;

export const TaskBox = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 2.59375rem; 
    .day-work {
        width: fit-content;
        font-size: 1.125rem;
        color: rgb(255,255,255);
        font-family: PingFang-SC-Bold;
        border-bottom:1px solid #fff;
    };
    .top-info {
        width: fit-content;
        font-size: 1.125rem;
        color: rgb(255,255,255);
        font-family: PingFang-SC-Bold;
        border-bottom:1px solid #fff;
    };
`;


export const ChatTop = styled.div`
	align-items:bottom;
    height: 4rem;
    width: 100%;
    line-height: 4rem;
    background-color: #9a2227;
    position: fixed;
    top: 0;
    z-index: 1000;
    .back{
        height: 1.875rem;
        width: 1.125rem;
        margin-left: 1rem;
        margin-bottom: 0.4375rem;
        vertical-align: bottom;
    }
`;

export const ChatToKing = styled.img`
    height: 1.1875rem;
    width: 2.5625rem;
    vertical-align: bottom;
    margin-bottom: 0.875rem;
    margin-left: 4.625rem;
`;

export const ChatToAngel = styled.img`
    height: 1.2875rem;
    width: 3.96875rem;
    vertical-align: bottom;
    margin-bottom: 0.875rem;
    margin-left: 4.25rem;
`;

export const Input = styled.input`
    position: fixed;
    bottom: 5px;
    height: 36px;
    width: 70%;
    padding-left: 10px;
    outline: none;
    line-height: 35px;
    font-size: 17px;
    background: #C8C8C8;
    border-radius: 50px;
    border: 1px solid #cac8ee;
    align-left: 55px;
    maxlenght: 10;
    overflow: hidden;
    color: #666666;
    border: 0;
    margin: 0;
`;

export const SendMsg = styled.button`
    position: fixed;
    height: 40px;
    width: 20%;
    background: #006699;
    margin: 0;
    border: 2px solid #006699;
    border-radius: 50px;
    bottom: 5px;
    right: 10px;
`;