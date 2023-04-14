import ReviewCard from "./ReviewCard";

function Reviews() {
    const reviews =  [
        {
            id: "1",
            name: "Ryan",
            reviewText: "Review text",
            rating: 4.5,
            profilePicAltText: "Ryan",
        },
        {
            id: "2",
            name: "Bella",
            reviewText: "Review text",
            rating: 5,
            profilePicAltText: "Bella",
        },
        {
            id: "3",
            name: "Kyle",
            reviewText: "Review text",
            rating: 4.3,
            profilePicAltText: "Kyle",
        },
        {
            id: "4",
            name: "Aubrey",
            reviewText: "Review text",
            rating: 4.75,
            profilePicAltText: "Aubrey",
        },
    ];

    return (
        <section>
            <h2>Testimonials</h2>
            <div>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
}

export default Reviews;
