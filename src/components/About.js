import '../css/About.css';

const About = () => {
    return(
        <div className='about-container'>
            <div className="acontainer">
                <span className="name">About US</span>
                <span className="border"></span>
                <p>
                    EduShare is a platform for people to share, discuss and contribute resources within a
                    specified group. EduShare helps its users to create or join different communities or groups
                    where they can help each other in the learning process of the technology in that group.
                    <br/>
                    These groups will have admins and members all of which will be authorized to different operations. An admin will have permission to include resources into the group’s resources section with appropriate tags and titles.
                    Group members will be able to view these resources, upvote/downvote these resources and also send a request to admins with the resource the member wants to contribute.
                    Every user in the group (admins and members) will be allowed to engage in various discussion spaces, i.e., general group discussion or resource specific discussion.
                    <br/>
                    Resources can be of various types, mainly in the form of pdfs, links, photos and videos. We can classify different resources by applying tags on the resources and using custom titles. The resources section can also have various topics which can have multiple resources. This way it will be easier for members to access resources for a specific topic or tag.


                </p>
            </div>

        </div>
    );
}
export default About;