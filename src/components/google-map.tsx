const GoogleMap = () => {
  return (
    <>
      <h1 className='text-jmb-red my-8 text-center text-2xl font-bold'>
        Our Location
      </h1>

      <section
        className='relative mt-10 w-full overflow-hidden rounded-lg border-2 border-white shadow-xl'
        aria-label='Our Location'
      >
        <div className='relative aspect-square w-full sm:aspect-video'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4654.926583468802!2d72.97335389999999!3d26.243411899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418eb6e56c7899%3A0x4defe81fb9b16ff8!2sJai%20Maa%20Bhawani%20Dal%20Bati%20Churma!5e1!3m2!1sen!2sin!4v1739965686573!5m2!1sen!2sin'
            className='absolute inset-0 h-full w-full'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Google Maps - Jai Maa Bhawani Dal Bati Churma'
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default GoogleMap;
