import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O2K9CJLILYwU6kbKkN2KR67etjZLE2n1k10XmzlANbNBkRq56WcZH6nKI35KEcT7MpdN8qAWm73S87LFUiHpGqZ00XEsc1mFH');

export default stripePromise;