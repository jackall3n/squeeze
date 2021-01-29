import React from 'react';
import NotificationForm from "./components/NotificationForm";
import { Header } from "./components/Header";
import { Article } from "./components/Layout";

import './App.css';

function TheSituation() {
  const sources = [{
    source: 'Ortex',
    estimate: 100.00
  }, {
    source: 'S3 Shortsight',
    estimate: 123.25
  }]

  const shorts = sources.map(s => `${s.estimate}% of float by ${s.source}`);
  const availability = "+9,000";

  return (
    <Article title="the situation (1/28 5 PM ET):">
      <p>
        <ul>
          <li><b>short interest:</b> <span id="short_interest">{shorts.join(', ')}.</span></li>
          <li><b>change in short share availability:</b> <span id="short_availability">{availability}</span></li>
          <li>robinhood and other brokerages relying on Citadel stopped accepting buy orders on stocks which Citadel
            wants to allow its hedge funds to unwind from. Robinhood is apparently going so far as to liquidate GME
            shares in accounts that are not using margin trading(!) If you're still on robinhood, you should find a
            new
            broker ASAP. Retail brokers who didn't stab their clients in the back include:
            <ul>
              <li>vanguard</li>
              <li>td ameritrade</li>
              <li>fidelity</li>
            </ul>
          </li>
        </ul>
      </p>
    </Article>
  )
}

function Wat() {
  return (
    <Article title="wat">
      <p>
        OK, listen up, you late-to-the-party, crayon-eating homunculus, here's what's going on:
      </p>
      <p>
        Over the past year, hedge fund supervillains have made money by selling shares of Gamestop they don't actually
        own
        - they've just borrowed them. Short selling. If they sell enough they can drive the price down so far that
        when
        they eventually need to return the shares they borrowed, they can get them cheap. It's free money. They throw
        a
        couple hundred mil at this, chill in their offices watching live video feeds of homeless people being
        exsanguinated on the hoods of their vintage sports cars, write up an investor report, and call it a fiscal
        year.
      </p>
      <p>
        They borrowed and sold a record amount - they sold more shares, in fact, than are actually traded, far more
        than
        Gamestop's float. This shouldn't have been allowed to happen and probably means they were selling
        shares they never even bothered to borrow - naked shorts. (Where were you on that one, SEC?) Essentially, they
        were simultaneously betting on Gamestop going bankrupt and doing their best to drive them into bankruptcy.
        It's
        a
        good tactic when you need to find a way to pay for your old wife's alimony and your new wife's poolboy.
      </p>
      <p>
        But it presents an opportunity for the savvy degenerate gambler. Because these shares eventually need to be
        returned - after all, it does cost these funds money to borrow a share. And the higher the price goes, the
        more
        unstable
        it becomes, the more it costs to borrow. This means that at some point, they need to buy back those borrowed
        shares they
        sold.
      </p>
      <p>
        All 140% of them.
      </p>
      <p>
        So our visionary gambler, if they were to invest in Gamestop, would have a guaranteed buyer for their shares.
        And
        if millions of fellow degenerates were to ask their mother for an advance on their allowance so that they
        could
        buy Gamestop, too -
      </p>
      <p>
        And then, if a famous e-commerce CEO were to buy a ton of Gamestop shares, join the board, and announce
        they're
        going to be a big company again by doing internet things and esports and radical new stuff -
      </p>
      <p>
        And then, if a truly insane amount of call option buying - don't worry about it if you don't know - were to
        force
        market makers to rapidly buy up a ton of shares to fulfill all those options they sold in a wild phenomenon
        called
        a gamma squeeze that's basically the stock equivalent of an atmospheric microburst, suddenly spiking
        Gamestop's
        price to unheard-of levels -
      </p>
      <p>
        - hang on, I need a new pair of pants -
      </p>
      <p>
        Well then you'd have the perfect conditions for a short squeeze. The price is insanely high. There's a whole
        street of funds with deep pockets who absolutely must find a way to buy all those insanely expensive shares.
        And
        by buying them - 140% of the amount traded! - they're going to drive up the price even more. So one day, a
        fund
        will run out of money paying interest on their borrowed shares, and they'll have to drive GME's price through
        the
        roof
        buying enough shares to give
        them back. And as the price climbs, other short holders are going to be required to cover their borrowed
        shares
        by
        buying them. It's a runaway reaction where the more it happens, the more it happens. You know, one of those
        cute
        little phenomena like virus spread. Or nuclear bombs.
      </p>
      <p>
        So who are they buying from? That's right. At what price are they buying? Well, that depends.
      </p>
      <p>
        Hedge fund managers holding GME shorts would really, really like to convince GME stock holders to sell them
        some
        shares right now, before it climbs any higher, so that they can return the shares they borrowed and get out
        before
        they get steamrolled into bankrupcy. And they've got lots of tools at their disposal to do this: they can pump
        up
        other stocks to create FOMO, causing GME holders to sell their shares to go chase some shiny new meme. They
        can
        hire PR companies to astroturf these stocks on Elon Musk fan clubs and gambling forums. They can buy up shares
        and
        then, after trading hours are over, sell them in progressively cheaper tranches to drive down the stock price.
        They can wipe the hobo blood off their wattle and go cry on television about how they're being bullied.
        They can call up their investors, like Citadel, the company who processes all your orders, and tell them to
        stop
        letting people buy Gamestop while they try to drive the price down. They have,
        in fact, tried all of these things. But it hasn't worked - GME's price is higher than ever. It's out of
        control,
        now - there are too many people involved. There are other institutions involved, trying to extract maximum
        profit
        out of the shorts. The meme has reached critical mass.
      </p>
      <p>
        Now it's a classic million-player prisoner's dilemma: every GME holder has visions of selling their shares for
        unlimited chicken tendies and cocaine dipping sauce. Maybe they think they alone can sell, while everyone else
        can
        continue to drive the price up by holding. But if every degenerate gambler thought this way, and sold their
        shares, very quickly the short squeeze wouldn't happen. Short holders would buy up all the shares being sold
        at
        a
        painful but manageable loss, they would cover their position, and the nuke would never be detonated.
      </p>
      <p>
        What's a prisoner in this dilemma to do? At last, the point arrives. To avoid selling too early, the savvy
        degenerate gambler would wait until short interest - the amount of shares shorted out there - started to
        decline
        substantially. As long as nobody was defecting, nobody selling early, that decline in shares shorted would
        come
        with a spike in the price of the stock, as the few shares available are bought at astronomical prices. And
        this
        decline in shares shorted would distinguish this spike from gamma squeezes or regular old stock run-ups.
      </p>
      <p>
        Then and only then, as the nuke goes off, the stock price ascends past Alpha Centauri, and the short interest
        finally starts declining, the short squeeze has begun. And then it's every gambler for themself.
      </p>
    </Article>
  )
}

function Resources() {
  return (
    <Article title="resources:">
      <p>
        do your own research you apes, don't rely on me
        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://screener.shortsight.com/">
            s3 shortsight (subscription)
          </a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.ortex.com/symbol/nyse/gme/short_interest">
            ortex short interest (trial + subscription)
          </a></li>
          <li><a target="_blank" rel="noreferrer" href="https://fintel.io/ss/us/gme">
            fintel short shares availability
          </a></li>
          <li><a target="_blank" rel="noreferrer" href="https://iborrowdesk.com/report/GME">
            iBorrow short shares borrow rates
          </a></li>
          <li><a target="_blank"  rel="noreferrer"
                 href="https://www.interactivebrokers.com/en/index.php?key=gme&cntry=usa&tag=United+States&ib_entity=&ln=&asset=&f=4587">
            Interactive Brokers borrow availability (free trial)
          </a></li>
        </ul>
      </p>
    </Article>

  )
}

function PointsOfInterest() {
  return (
    <Article title="points of interest:">
      <p>
        if you don't know this you shouldn't be gambling, but
        <ul>
          <li>
            robinhood didn't halt trading just because they hate you, they did it because Citadel made them. Robinhood
            can't
            actually place your order themselves, they need to go to a market maker to find a counterparty for you.
            Citadel
            actually pays robinhood for this, because your trades are free money for them - they overcharge you on the
            spread, and they place their own trades immediately before yours to take advantage of price movement.
            They're
            the ones who want you to lose money: they bailed out the biggest hedge fund shorting Gamestop, Melvin, so
            now
            they own a huge chunk of that fund. So now that they want the shorts to win, and the retail traders (you)
            to
            lose, they told robinhood to get lost, they just wouldn't be accepting buy orders on these stocks. Just
            sells.
            (This has never happened before.) Only then did Robinhood turn around and stab its retail traders in the
            back -
            because, of course, you're not their customer. Citadel is their customer. You're their product.
          </li>
          <li>
            ok, this one's new to me: robinhood is apparently selling shares belonging to accounts that are not
            trading
            on margin. Margin calls are normal. Selling shares that your clients own outright is crazytown
            what-in-the-world shenanigans.
          </li>
          <li>
            your broker is lending your shares out to people who want them, like the hedge funds you're betting
            against.
            depending who your broker is you can call them and tell them to stop, turn off margin trading, set limit
            sells
            at stratospherically high prices, or go get a real broker.
          </li>
          <li>
            your broker is selling your information, like your sell price, to anybody who can pay for it. if you set a
            stop-loss sell at 100, and some other gambler set a stop-loss sell at 115, then a hedge fund wanting to
            drive
            the price down can start to chain-trigger stop-loss sells until the prices reaches a level low enough to
            allow
            them to escape the short squeeze.
          </li>
        </ul>
      </p>
    </Article>
  )
}

function Contact() {
  return (
    <Article>
      <p><a target="_blank" rel="noreferrer" href="https://bonner.jp">
        by jp
      </a></p>
      <p><a target="_blank" rel="noreferrer" href="https://twitter.com/inflammateomnia">
        @inflammateomnia
      </a></p>
      <p>
        I am not a financial advisor and none of this is financial advice
      </p>
      <p>
        do your own research and come to your own conclusions
      </p>
    </Article>
  )
}

function App() {
  return (
    <>
      <Header />
      <Article>
        <p>GME shorts have not begun to close their positions in substantial numbers.</p>
      </Article>
      <TheSituation />
      <NotificationForm />
      <Wat />
      <Resources />
      <PointsOfInterest />
      <Contact />
    </>
  )
}

export default App;
