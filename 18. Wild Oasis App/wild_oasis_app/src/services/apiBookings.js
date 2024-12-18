import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings({ filter, sort, pagination }) {
  // with select("*") we select only the bookings table
  // const { data, error } = await supabase.from("bookings").select("*");

  // console.log("filter", filter);
  // console.log("sort", sort);

  // now we select the bookings table and also everything from cabins and guests
  // const { data, error } = await supabase
  //   .from("bookings")
  //   .select("*,cabins(*),guests(*)");

  // to conditionally get data, we will create a query variable and modify it and use it after
  // initial query --> {count:'exact'} get's use number of all rows
  let query = supabase
    .from("bookings")
    .select("*,cabins(*),guests(*)", { count: "exact" });

  //  modify query based on the filter
  query = !filter ? query : query.eq(filter.filterBy, filter.filterValue);

  // modify query based on the sort order
  query = !sort ? query : query.order(sort.sortBy, { ascending: sort.order });

  // modify query based on the pagination
  query = query.range(pagination.start, pagination.end);

  // console.log("query", query, pagination);

  // use the new query
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  // console.log(
  //   "bookings",
  //   data.map((item) => {
  //     const daysAgo7 = new Date();
  //     daysAgo7.setDate(daysAgo7.getDate() - 20);
  //     const itemDate = new Date(item.created_at);
  //     console.log("days", daysAgo7);
  //     console.log("itemDate", itemDate);
  //     if (daysAgo7 > itemDate) {
  //       console.log("over7Dayse");
  //     } else {
  //       console.log("in 7 days");
  //     }
  //   })
  // );a
  // console.log("data", data);

  // const { data: dateData } = await supabase
  //   .from("bookings")
  //   .select("*")
  //   .lt("created_at", "Thu, 17 Oct 2024 09:17:14 GMT");

  // console.log("dateData", dateData);

  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  // console.log("api", date);
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice, isPaid")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
