import React from "react";

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {

    const TabContent = () => (
        <div className="content">
            <RepoIcon />
            <span className="label">Repositories</span>
            <span className="number">26</span>
        </div>
    )

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset" />
                    <TabContent />
                </div>
                
                <span className="line" />
            </Tab>

            <Main>
                <LeftSide>
                    <ProfileData
                        username={'MVinicius43'}
                        name={"Marcos Vinícius"}
                        avatarUrl={"https://avatars.githubusercontent.com/u/57725183?v=4"}
                        followers={887}
                        following={7}
                        company={'PSV'}
                        location={'Barbacena-MG, Brazil'}
                        email={'mviniciusess@gmail.com'}
                        blog={'https://www.linkedin.com/in/marcos-vin%C3%ADcius-em%C3%ADdio-silva/'}
                    />
                </LeftSide>
                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line"></span>
                    </Tab>
                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1,2,3,4,5,6].map(n => (
                                <RepoCard
                                    key={n}
                                    username={'MVinicius43'}
                                    reponame={'github-clone'}
                                    description={'A Github web page clone.'}
                                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>

                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>

                    <RandomCalendar>
                        
                    </RandomCalendar>
                </RightSide>
            </Main>
        </Container>
    )
};

export default Profile;