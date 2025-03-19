import MainBanner from '../components/MainBanner';
import InformationSection from '../components/Information';
import SubscriptionSectionContainer from '../components/Subscription';
import FAQSectionContainer from '../components/FaqSection';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className="text-center">
            <div className="text-center p-5">
                <h1 className="text-2xl font-bold">{t('welcome')}</h1>
                <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} className="mt-4 p-2 bg-primary text-white rounded">
                    Switch Language
                </button>
            </div>
            <MainBanner />
            <InformationSection />
            <SubscriptionSectionContainer />
            <FAQSectionContainer />
            <Footer />
        </div>
    );
}

export default Home;