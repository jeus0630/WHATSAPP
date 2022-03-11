import styled from 'styled-components'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, IconButton } from '@mui/material';

type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <Container>
            <Header>
                <UserAvatar></UserAvatar>

                <IconsContainer>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon></SearchIcon>
                <SearchInput placeholder="Search in chats"></SearchInput>
            </Search>

            <SidebarButton>Start a new chat</SidebarButton>

        </Container>
    )
}

const Container = styled.div`
    
`;

const Header = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    background-color: #fff;
    z-index: 1; 
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: .8;
    }
`;

const IconsContainer = styled.div`

`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`

const SearchInput = styled.input`
    flex:1;
    outline: none;
    border: none;
`

const SidebarButton = styled(Button)`
    width: 100%; 
    color : #000;

    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`