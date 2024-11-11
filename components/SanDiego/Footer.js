export default function Footer() {
  return (
    <div className="p-6 pt-4 text-2xl bg-pink neuebit">
      <div className="text-center">
        <p>Built with love by teenagers, for teenagers at Hack Club</p>
      </div>
      <div className="flex items-center justify-center ">
        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Hack Club
        </a>{" "}
        |{" "}
        <a
          href="https://hackclub.com/slack/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Slack
        </a>{" "}
        |{" "}
        <a
          href="https://www.youtube.com/@HackClubHQ"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          YouTube
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/starthackclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Instagram
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://www.instagram.com/aeralixe/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Art by Elena Baskakova (18, Boston)
        </a>
      </div>
    </div>
  );
}
