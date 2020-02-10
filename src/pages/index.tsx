import React from 'react';
import { Link } from 'gatsby';
import '@styles/app.scss';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div className="home">
          <div className="home-homeFlottant">
            <img className="homeFlottant" src="img/svg/home_flottant.svg" />
          </div>
          <img className="homeBg" src="img/png/header_bg.png" />

          <div className="row home-header">
            <div className="columns auto">
              <h1 className="text-center">BDX I/O 2019</h1>
              <div className="row align-center">
                <div className="columns shrink">
                  <div className="home-header-content">
                    <span>
                      <i className="fa fa-calendar" />
                      15 novembre
                    </span>
                    <span>
                      <i className="fa fa-map-marker" />
                      Palais des congrès
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={'columns small-12 align-center countdown'}>
                  <div className="small-2 medium-2 text-center">
                    <h2 className="">99</h2>
                    <div className="">mois</div>
                  </div>

                  <div className="small-2 medium-2 text-center countdown-border">
                    <h2 className="">99</h2>
                    <div className="">jours</div>
                  </div>

                  <div className="small-2 medium-2 text-center">
                    <h2 className="">99</h2>
                    <div className="">heures</div>
                  </div>

                  <div className="small-2 medium-2 text-center countdown-border">
                    <h2 className="">99</h2>
                    <div className="">minutes</div>
                  </div>

                  <div className="small-2 medium-2 text-center">
                    <h2 className="">99</h2>
                    <div className="">secondes</div>
                  </div>
                </div>
              </div>
              {/* {isMobile ? (
              <div className="replace-countdown-space" />
            ) : (
              <Countdown />
            )} */}

              <div className="row">
                <div className="columns auto text-center home-header-button">
                  <a
                    href="/static/plaquette.pdf"
                    className="button medium white"
                    target="_blank"
                  >
                    Devenir sponsor
                  </a>
                  <a
                    href="https://conference-hall.io/public/event/XGTzWawB3ZwLR7u462O8"
                    className="button medium white"
                    target="_blank"
                  >
                    Devenir speaker·euse
                  </a>
                  {/* {Config.registrationOpened === 'opened' && (
                  <button
                    className="button medium white"
                    onClick={() => {
                      window.open(
                        'https://www.billetweb.fr/shop.php?event=bdx-i-o-2019',
                        'Billetterie BDX I/O 2019',
                        'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                      );
                    }}
                  >
                    Achetez votre place
                  </button>
                )} */}
                  {/* {moment().isSameOrAfter(
                  moment(Config.programPublishingDate)
                ) && (
                  <a href="/#/schedule" className="button medium white">
                    Programme
                  </a>
                )} */}
                  {/* {Config.registrationOpened !== 'opened' &&
                  moment().isBefore(moment(Config.talksListPublishingDate)) && (
                    <a
                      href="/static/plaquette.pdf"
                      className="button medium white"
                      target="_blank"
                    >
                      Devenir sponsor
                    </a>
                  )} */}
                  {/* {moment().isSameOrAfter(moment(Config.cfpOpeningDate)) &&
                  moment().isSameOrBefore(moment(Config.cfpClosingDate)) && (
                    <a
                      href="https://conference-hall.io/public/event/XGTzWawB3ZwLR7u462O8"
                      className="button medium white"
                      target="_blank"
                    >
                      Devenir speaker·euse
                    </a>
                  )} */}

                  {/* <button
                  className="button medium ticket-switch switch-tickets-button"
                  type="button"
                >
                  <Link to="/tickets/switch">Transférer votre place</Link>
                </button> */}
                </div>
              </div>
              {/* {moment().isSameOrAfter(moment(Config.cfpOpeningDate)) &&
              moment().isSameOrBefore(moment(Config.cfpClosingDate)) && (
                <div className="row cfp-date">
                  <div className="columns auto text-center">
                    {`CFP ouvert du ${moment(Config.cfpOpeningDate).format('LL')}
                    au ${moment(Config.cfpClosingDate).format('LL')}`}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

        <svg
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 12 50 30"
          xmlSpace="preserve"
        >
          <g>
            <defs>
              <polygon
                id="SVGID_1_"
                points="0,11.7 0,24.8 25,40.3 50,24.8 50,11.7"
              />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_1_" />
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_2_)' }}>
              <image
                width="4500"
                height="3500"
                xlinkHref="img/png/bdxio_header.png"
                transform="matrix(1.256919e-02 0 0 1.256919e-02 -3.513 3.5492)"
              />
            </g>
          </g>
        </svg>

        <section className="row text-center home-about">
          <div className="home-about-aboutFlottant">
            <img className="aboutFlottant" src="img/svg/about_flottant.svg" />
          </div>
          <div className="home-about-text">
            <h4 className="sectionTitle align-center">À propos de Bdxio</h4>
            <h6>
              BDX I/O est une conférence sur le thème de la programmation et de
              ses métiers annexes. <br />
              Pour cette sixième édition, nous recevrons plus de 900
              passioné·e·s pour une nouvelle journée de découverte dans la bonne
              humeur !!!
            </h6>
          </div>
        </section>

        {/* <MetricsBar /> */}
        <div className="row align-middle metricsBar">
          <div className="columns hide-for-small-only auto text-center metricsBar-picture" />
          <div className="columns small-12 medium-7">
            <div className="row metricsBar-content align-center">
              <div className="metrics-item text-center">
                <h3 className="metricsBar-content-number">40</h3>
                <div className="metricsBar-content-text">Talks</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">40</h3>
                <div className="metricsBar-content-text">Speakers</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">900</h3>
                <div className="metricsBar-content-text">Participants</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">3</h3>
                <div className="metricsBar-content-text">Hands'on</div>
              </div>
            </div>
          </div>
          <div className="columns hide-for-small-only auto text-center metricsBar-video" />
        </div>

        {/*<div className="row align-center">*/}
        {/*<Link className="columns shrink button small primary disabled" to="/gallery">Voir la galerie</Link>*/}
        {/*</div>*/}

        {/* <ConferenceThemes /> */}
        <div className="row conference">
          <div className="conference-conferenceFlottantRight">
            <img src="img/svg/theme1_flottant.svg" />
          </div>
          <div className="conference-conferenceFlottantLeft">
            <img src="img/svg/theme2_flottant.svg" />
          </div>
          <div className="columns small-12 text-center conference-themes">
            <h5 className="sectionTitle">Les thèmes de la conférence</h5>
            <h6>
              Elles permettent de donner une coloration à la conférence.
              L’édition 2018 sera articulée autours de 6 thématiques.
            </h6>
          </div>

          <div className="row auto align-center">
            <div className="column small-12 medium-8 conference-container">
              <div className="row conference-container-content">
                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_design.svg" />
                  </div>
                  <h6>Design, UI & UX</h6>
                  <div className="text-themes">
                    CSS, Ergonomie & Design. Experience utilisateur.
                  </div>
                </div>

                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_back.svg" />
                  </div>
                  <h6>Backends, Cloud & BigData</h6>
                  <div className="text-themes">
                    Frameworks côté serveur. Cloud. Base de données NoSQL.
                  </div>
                </div>

                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_front.svg" />
                  </div>
                  <h6>Frontend Web, Mobile et VideoGames</h6>
                  <div className="text-themes">
                    Frameworks côté client. Application web / mobiles (hybrides,
                    natives) / progressives. Outillage pour les jeux vidéos.
                  </div>
                </div>

                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_tooling.svg" />
                  </div>
                  <h6>Tooling</h6>
                  <div className="text-themes">
                    Outillage pour la productivité. Outillage pour le build.
                    IDE.
                  </div>
                </div>

                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_internet.svg" />
                  </div>
                  <h6>Internet des objets & marchés émergents</h6>
                  <div className="text-themes">
                    A la recherche des idées disruptives au service du monde de
                    demain.
                  </div>
                </div>

                <div className="columns small-6 medium-4 text-center conference-container-content-item">
                  <div>
                    <img src="img/svg/icon_theme_dev.svg" />
                  </div>
                  <h6>Conception, Architecture & Pratiques de dev</h6>
                  <div className="text-themes">
                    Méthodologie comme SCRUM ou Kanban. Principes
                    d'architecture.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Quote /> */}
        <div className="row align-middle align-center home-team">
          <div className="home-team-content">
            <h5 className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              fugiat aspernatur magni iste sed porro exercitationem, voluptates
              ipsam amet ex quos praesentium totam ipsa! Mollitia, voluptate
              ipsa. Cumque, similique distinctio?
            </h5>
            <h6 className="text-center">Lorem</h6>
          </div>
        </div>

        {/* <SomeSpeakersPresentation
          speakers={Speakers.length > 0 ? Speakers : Speakers18}
          isPrevious={Speakers.length === 0}
          isMobile={isTabletOrSmaller}
        /> */}

        {/* <SomeNews news={News} /> */}
        <div className="row someNews">
          <div className="columns small-12 text-center">
            <h5 className="sectionTitleBg">Nos Actualités en bref</h5>
            {/* <h6 className="sectionSubtitleBg">Que se passe-t-il à BDX I/O ?</h6> */}
          </div>

          <div className="align-center">
            <div className="row collapse align-center someNews-content">
              <div className="columns small-10 large-3 someNews-content-item">
                <div className="news-container">
                  <div className="img-container">
                    <img
                      className="someNews-content-item-picture"
                      src="https://docs.google.com/uc?id=1CyJ4OZsXo5vKNVCZus-1rtgCiWUgqbkj"
                    />
                  </div>
                  <div className="someNews-content-item-title">
                    Délibérations BDX I/O 101 : Comment ça fonctionne ?
                  </div>
                  <div className="text-content someNews-content-item-news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores rem officia tenetur optio, maxime error doloremque
                    neque adipisci cum temporibus debitis dolorem consectetur
                    fugit sunt reprehenderit, molestias ea ipsa delectus!
                  </div>
                </div>
                <div className="text-center someNews-content-item-button">
                  <Link className="button tiny secondary" to={'/news'}>
                    Lire l'article
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row align-center someNews-navigate">
              {[...Array(3)].map((v, i) => {
                return (
                  <button
                    className={1 === i ? 'selected' : ''}
                    key={`'select_'${i}`}
                    type="button"
                  >
                    <i className="fa fa-circle" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="columns shrink text-center">
            <Link className="button small white" to={'/news'}>
              Tout voir
            </Link>
          </div>
        </div>

        {/* <TicketingAccess
          registrationIsOpened={Config.registrationOpened === 'opened'}
          earlyBirdSoldout={Config.earlyBird === 'soldout'}
          gtSoldout={Config.goldenTicket === 'soldout'}
          soldout={Config.registrationOpened === 'soldout'}
        /> */}
        <section className="row ticketingAccess">
          <div className="ticketingAccess-ticketingAccessFlottant">
            <img src="img/svg/theme1_flottant.svg" />
          </div>
          <div className="columns small-12 text-center">
            <h5 className="sectionTitle">Achetez votre place pour BDX I/O</h5>
            {/* {!registrationIsOpened && (
              <h6 className="sectionSubtitle">
                Ouverture de la billeterie en Juin
              </h6>
            )} */}
          </div>

          <div className="row collapse align-center ticketingAccess-container">
            <div
              className={
                'column small-10 medium-3 large-3 ticketingAccess-container-item ' +
                'disabled'
                // (!registrationIsOpened || earlyBirdSoldout ? 'disabled' : '')
              }
            >
              <div className="row align-center ticketingAccess-container-item-infos">
                <div className="columns small-12 ticketingAccess-container-item-infos-title">
                  <div className="ticketingAccess-container-item-infos-title-euros">
                    40,00 €
                  </div>
                  <div className="ticketingAccess-container-item-infos-title-classe">
                    Early Bird
                  </div>
                </div>
                <div className="columns small-12 ticketingAccess-container-item-infos-status">
                  Individuel
                </div>
              </div>
              <div className="row ticketingAccess-container-item-content">
                <div>
                  Accès a partir de 8H30 au <span>petit déjeuner</span>
                </div>
                <div>
                  Repas <span>offert</span> le midi
                </div>
                <div>Accès aux stands</div>
                <div>
                  Accès à <span>toutes</span> les conférences
                </div>
              </div>
              <div className="row shrink align-center">
                {/* {registrationIsOpened && !earlyBirdSoldout ? (
                  <button
                    className="button small secondary"
                    onClick={() => {
                      window.open(
                        'https://www.billetweb.fr/shop.php?event=bdx-i-o-2019',
                        'Billetterie BDX I/O 2019',
                        'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                      );
                    }}
                  >
                    Acheter
                  </button>
                ) : ( */}
                <span className="button small secondary disabled">
                  Pas encore disponible
                  {/* {earlyBirdSoldout ? 'Épuisé' : 'Pas encore disponible'} */}
                </span>
                {/* )} */}
              </div>
            </div>

            <div
              className={
                'column small-10 medium-3 large-3 ticketingAccess-container-item ' +
                'disabled'
                // (!registrationIsOpened || soldout ? 'disabled' : '')
              }
            >
              <div className="row align-center ticketingAccess-container-item-infos">
                <div className="columns small-12 ticketingAccess-container-item-infos-title">
                  <div className="ticketingAccess-container-item-infos-title-euros">
                    80,00 €
                  </div>
                  <div className="ticketingAccess-container-item-infos-title-classe">
                    Classic
                  </div>
                </div>
                <div className="columns small-12 ticketingAccess-container-item-infos-status">
                  Individuel
                </div>
              </div>
              <div className="row ticketingAccess-container-item-content">
                <div>
                  Accès a partir de 8H30 au <span>petit déjeuner</span>
                </div>
                <div>
                  Repas <span>offert</span> le midi
                </div>
                <div>Accès aux stands</div>
                <div>
                  Accès à <span>toutes</span> les conférences
                </div>
                <div>Soutenez l'événement</div>
              </div>
              <div className="row shrink ticketingAccess-container-item-content-button align-center">
                {/* {registrationIsOpened && !soldout ? (
                  <button
                    className="button small secondary"
                    onClick={() => {
                      window.open(
                        'https://www.billetweb.fr/shop.php?event=bdx-i-o-2019',
                        'Billetterie BDX I/O 2019',
                        'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                      );
                    }}
                  >
                    Acheter
                  </button>
                ) : ( */}
                <span className="button small secondary disabled">
                  Pas encore disponible
                  {/* {soldout ? 'Épuisé' : 'Pas encore disponible'} */}
                </span>
                {/* )} */}
              </div>
            </div>
          </div>
        </section>

        {/* <Location /> */}
        <section className="row location align-center location-infos">
          <div className="columns small-12 medium-4 large-3 location-infos-place">
            A 10 minutes de <br />> Bordeaux
          </div>
          <div className="columns small-12 medium-4 large-3 location-infos-amphis">
            5 amphis en parallèle <br />> 40 conférences
          </div>
          <div className="columns small-12 medium-4 large-3 location-infos-dev">
            15 communautés <br />> 900 Développeur·se·s
          </div>

          <div className="columns small-12 location-site">
            <div className="row">
              <div className="columns shrink location-site-place">
                <h5>Palais des congrès</h5>
                <div>
                  Avenue Jean Gabriel Domergue
                  <br />
                  33300 Bordeaux
                </div>
                <br />
                <div>
                  Pour nous rejoindre en transport en commun,
                  <br />
                  choisisser le Bus ou le Tram.
                </div>
                <br />
                <div>
                  Si vous venez en voiture, le parking du Palais des congrès est
                  ouvert et gratuit.
                </div>
              </div>

              <div className="columns auto location-site-map">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1SdobaspVQ0Rfo7syUJBOcE&key=AIzaSyBQYTDJ5joswWG8lQ-Wv9MGYUqHhD9LfCc"
                  height="300"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;