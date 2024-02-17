import Image from "next/image";

function AboutUs() {
  return (
    <div className="mt-50">
      <article className="group">
        <Image
          width={300}
          height={100}
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] mx-auto"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-25px font-medium text-blue-700 items-center">
              Full Stack Developer
            </h3>
          </a>

          <div className="mt-2 text-sm/relaxed text-gray-500">
            <div>
              With a strong foundation in the construction field, I bring over 3
              years of valuable experience to the world of technology. Having
              worked on the prestigious Bangalore International Airport project,
              I've honed my skills in project management, attention to detail,
              and the drive for excellence.
            </div>
            <div>
              Seeking new challenges and opportunities, I embarked on a journey
              to become a full-stack developer. Recently, I successfully
              completed the required certification from Upgrade, enhancing my
              skills in web development and software engineering.
            </div>
            <div>
              In addition to my professional endeavors, I've pursued personal
              projects that have allowed me to explore my creativity and expand
              my technical expertise. I've recently delved into the world of
              React Native, developing basic applications to further broaden my
              skill set.
            </div>
            <div>
              I am passionate about leveraging technology to solve real-world
              problems and am committed to continuous learning and growth in the
              field of software development.
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AboutUs;
