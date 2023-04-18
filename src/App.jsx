import { useState } from 'react'
import Card from './component/props/cards'
import Btn from './component/props/button'
import Article from './component/props/Article'
import BgPic from '/images/image-mockups.png'
import Online from '/images/icon-online.svg'
import Budget from '/images/icon-budgeting.svg'
import onboard from '/images/icon-onboarding.svg'
import api from '/images/icon-api.svg'
import currency from '/images/image-currency.jpg'
import restaurant from '/images/image-restaurant.jpg'
import plane from '/images/image-plane.jpg'
import confetti from '/images/image-confetti.jpg'



function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     
<div className='first-page-section'>
<div className='intro'>
<h1>Next generation digital banking</h1> 
<p>Take your financial life online.
Your Easybank account will be a one-stop-shop for spending, saving, budgeting,
investing, and much more.</p>
<div><Btn class="request-btn" /></div>
</div>
<div className='introImage'>
<img className='phones' src={BgPic} alt=""/>
</div>
</div>


<div className='second-page-section'>

<div className='WHE'>
<header>Why choose Easybank?</header>
<p>We leverage Open Banking to turn your bank account into your 
financial hub. Control your finances like never before.</p>
</div>


<div className='card-container'>
<Card src={Online} heading="Online Banking " paragraph="Our modern web and mobile applications 
allow you to keep track of your finances wherever you 
are in the world."/>

 <Card src={Budget} heading=" Simple Budgeting" paragraph=" See exactly where your
money goes each month. Receive notifications when you’re 
close to hitting your limits."/>

<Card src={onboard} heading="Fast Onboarding" paragraph="We don’t do
branches. Open your account in minutes online and start taking
control of your finances right away."/> 
<Card src={api} heading=" Open API" paragraph="  Manage your savings,
investments, pension, and much more from one account. Tracking your
money has never been easier."/>
</div>
</div>

<div className='third-page-section'>
  <header>Latest Articles</header>
 <div className='article-container'>
 <Article src={currency} authorName="Claire Robinson" heading=" Receive money in any currency with no fees" 
  paragraph="The world is getting smaller and we’re becoming 
  more mobile. So why should you be forced to only receive money in a single "/>
  <Article src={restaurant} authorName="Wilson Hutton" heading="Treat yourself without worrying about money"
  paragraph="Our simple budgeting 
  feature allows you to separate out your spending and set realistic limits 
  each month. That means you"/>
  <Article src={plane} authorName="Wilson Hutton" heading=" Take your Easybank card wherever 
you go" paragraph="We want you to enjoy your travels. This is why we don’t charge any fees
on purchases while you’re abroad. We’ll even show you"/>  
<Article src={confetti} authorName="Claire Robinson " heading="Our invite-only Beta accounts are now live!" paragraph="
 After a lot of hard work by the whole team, 
we’re excited to launch our closed beta. It’s easy to request an invite through the site"/>

 </div>
 
 </div>



    </div>
  )
}

export default App
