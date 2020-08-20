import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,

  QTabs,
  QTab,
  QRouteTab,

  QSpace,

  QBtnDropdown,

  QImg,

  QParallax,

  QTimeline,
  QTimelineEntry,

  QCard,
  QCardSection,
  QCardActions,

  QSeparator,

  QChip,

  QAvatar,

  QMenu,
  ClosePopup,

  QCarousel,
  QCarouselControl,
  QCarouselSlide,

  QBadge,

  QBreadcrumbs,
  QBreadcrumbsEl,

  QInput,

  QSplitter,

  QPageScroller,

  QFab,
  QFabAction,

  QPageSticky,

  QDate,
  QPopupProxy,

  QLinearProgress,

  QDialog,

  QForm,
  Dialog
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QFooter,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,

    QTabs,
    QTab,
    QRouteTab,

    QSpace,

    QBtnDropdown,

    QImg,

    QParallax,

    QTimeline,
    QTimelineEntry,

    QCard,
    QCardSection,
    QCardActions,

    QSeparator,

    QChip,

    QAvatar,

    QMenu,
    ClosePopup,

    QCarousel,
    QCarouselControl,
    QCarouselSlide,

    QBadge,

    QBreadcrumbs,
    QBreadcrumbsEl,

    QInput,

    QSplitter,

    QPageScroller,

    QFab,
    QFabAction,

    QPageSticky,

    QDate,
    QPopupProxy,

    QLinearProgress,

    QDialog,

    QForm
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Dialog
  }
})
