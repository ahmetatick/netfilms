import React from "react";
import styles from "./styles.module.scss";
import Loading from "@/components/loading";

const FeaturedMovieLoading = () => {
  return (
    <div
      className={styles.movieWrapper}
      style={{ height: 278 }}
    >
      <Loading />
    </div>
  );
};

export default FeaturedMovieLoading;
