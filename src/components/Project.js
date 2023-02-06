import Collapsible from "react-collapsible";

export default function Project(){

    return(
        <div className="all_projects">
        <Collapsible trigger='Click here to view the Projects!'>
        <div class="pic">
        <a href="https://grabajob.herokuapp.com/login" rel='noreferrer' target="_blank"> Job Board  </a>
        <a href="https://github.com/Chrisld50/job_board" target="_blank" rel='noreferrer'> Check it out! </a>
      </div>
    <div class="pic">
      <a href="https://github.com/Chrisld50/E-commerce_BE" rel='noreferrer' target="_blank"> E-Commerce Backend </a>
      <a href="https://drive.google.com/file/d/1LLER8KhZoAFJOjPa7lVaxF6ANmf4EFna/view" rel='noreferrer' target="_blank"> Check it out! </a>
    </div>
    <div class="pic">
      <a href="https://github.com/Chrisld50/Password_Generator" rel='noreferrer' target="_blank"> Password Generator </a>
      <a href="https://chrisld50.github.io/Password_Generator/" rel='noreferrer' target="_blank"> Check it out! </a>
    </div>
    <div class="pic">
      <a href="https://github.com/Chrisld50/weirdmusic" rel='noreferrer' target="_blank"> Weird Music </a>
      <a href="https://weirdmusic.herokuapp.com/" rel='noreferrer' target="_blank"> Check it out! </a>
    </div>
            </Collapsible>
        </div>
    )

}

