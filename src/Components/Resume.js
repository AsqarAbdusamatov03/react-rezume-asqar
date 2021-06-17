import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'}/>
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'4-months'}
                        title={'Teacher'}
                        subTitle={'School'}
                        text={"I have been a student for four months at school I have been teaching computer science I have been teaching at school the reason I have been teaching at school is that I have been orginizing my body to the girls and I want them to find their place in the future through the stimulation and manipulation of the programming in them and"}
                    />
                    {/*    <ResumeItem */}
                    {/*        year={'2015 - Present'} */}
                    {/*        title={'Full Stack Developer'}*/}
                    {/*        subTitle={'Microsoft Studios'}*/}
                    {/*        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} */}
                    {/*    />*/}
                    {/*    <ResumeItem */}
                    {/*        year={'2010 - 2017'} */}
                    {/*        title={'User Interface Designer'}*/}
                    {/*        subTitle={'Google Inc'}*/}
                    {/*        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} */}
                    {/*    />*/}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'}/>
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2020 - 2021'}
                        title={'IT-Academy'}
                        subTitle={'Academy'}
                        text={"I started to study programming since 2020-th year I want to continue to be one of the young programmers of the world because I like the field of dsrurism I have very kotta armons in the future I want to be one of the young programmers of the world I am currently studying in my prime time"}
                    />
                    {/*<ResumeItem */}
                    {/*    year={'2015 - 2017'} */}
                    {/*    title={'A - Levels'}*/}
                    {/*    subTitle={''}*/}
                    {/*    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} */}
                    {/*/>*/}
                    <ResumeItem
                        year={'2010 - 2021'}
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={"I was not very shocked at the school chog I was a father I was a Shoh my favorite job in my youth was playing chess when I was young I was holimnan Ham something was coming my youth qzigim I was interested in making hand tractor, kemalr, drones and through shular I took the orins vloyatlar now I have fun"}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume
