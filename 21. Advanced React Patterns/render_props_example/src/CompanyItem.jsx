export default function CompanyItem({ company }) {
  return (
    <li>
      <h3>{company.companyName}</h3>
      <h4>{company.companyPhrase}</h4>
    </li>
  );
}
