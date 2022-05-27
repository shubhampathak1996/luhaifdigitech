import React, { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import BeforeLoginRoutes from './shared/Routes/BeforeLoginRoutes'
import PrivateRoutes from './shared/Routes/PrivateRoutes'
import PageNotFound from './containers/notfound/PageNotFound'
import Home from './containers/home/Home'
import About from './containers/about/About'
import OurPortfolio from './containers/our-portfolio/OurPortfolio'
import Blogs from './containers/blogs/Blogs'
import Contact from './containers/contact/Contact'

import AllCaseStudies from './containers/case-study/AllCaseStudies'
import OurClients from './containers/ourclient/OurClients'
import SingleCaseStudy from './containers/case-study/SingleCaseStudy'
import SingleBlog from './containers/blogs/SingleBlog'
import SocialMedia from './containers/services/SocialMedia'
import SearchEngineOptimization from './containers/services/SearchEngineOptimization'
import DigitalMarketing from './containers/services/DigitalMarketing'
import SocialMediaMarketing from './containers/services/SocialMediaMarketing'
import WebDesignAndDevelopment from './containers/services/WebsiteDesignAndDevelopment'
import NgoAndFundraisingCampaign from './containers/services/NgoAndFundraisingCampaign'
import SearchEngineOptimisation from './containers/services/SearchEngineOptimisation'
import VideoProduction from './containers/services/VideoProduction'
import InfluencerMarketing from './containers/services/InfluencerMarketing'

import CrmLead from './containers/services/CrmLead'
import NidhiSoftware from './containers/services/NidhiSoftware'
import PerformanceMarketing from './containers/services/PerformanceMarketing'
import SingleWork from './containers/singlework/SingleWork'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about-us'} component={About} />
          <Route exact path={'/our-portfolio'} component={OurPortfolio} />
          <Route exact path={'/portfolio-item/:id'} component={SingleWork} />
          <Route exact path={'/our-clients'} component={OurClients} />
          <Route exact path={'/our-blogs'} component={Blogs} />
          <Route exact path={'/case-study'} component={AllCaseStudies} />
          <Route exact path={'/our-blogs/:slug'} component={SingleBlog} />
          <Route exact path={'/contact-us'} component={Contact} />
          <Route exact path={'/'} component={Contact} />
          <Route
            exact
            path={'/services/social-media'}
            component={SocialMedia}
          />
          <Route
            exact
            path={'/services/search-engine-optimization'}
            component={SearchEngineOptimization}
          />
          <Route
            exact
            path={'/services/digital-marketing'}
            component={DigitalMarketing}
          />
          <Route
            exact
            path={'/services/social-media-marketing'}
            component={SocialMediaMarketing}
          />
          <Route
            exact
            path={'/services/website-design-and-development'}
            component={WebDesignAndDevelopment}
          />
          <Route
            exact
            path={'/services/ngo-fundraising-campaigns'}
            component={NgoAndFundraisingCampaign}
          />
          <Route
            exact
            path={'/services/search-engine-optimisation'}
            component={SearchEngineOptimisation}
          />
          <Route
            exact
            path={'/services/video-production'}
            component={VideoProduction}
          />
          <Route
            exact
            path={'/services/influencer-marketing'}
            component={InfluencerMarketing}
          />
          <Route
            exact
            path={'/services/performance-marketing'}
            component={PerformanceMarketing}
          />
          <Route
            exact
            path={'/services/crm-and-lead-management-solutions'}
            component={CrmLead}
          />
          <Route
            exact
            path={'/services/nidhi-software'}
            component={NidhiSoftware}
          />

          <Route exact path={'/case-study'} component={AllCaseStudies} />
          <Route exact path={'/case-study/:id'} component={SingleCaseStudy} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
