const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema(
  {
    code: { type: String, required: true}, // Kupon kodu
    discountPercent: { type: Number, required: true }, // İndirim oranı
    used: {type:Boolean, required: false}
  },
  { timestamps: true }
);



const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;