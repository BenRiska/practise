const CampaignsMenu: React.FC = ({ filter, setFilter }: any) => {
  return <div style={{ marginTop: 64 }} className="shadow fixed top-0 left-0 right-0 w-screen z-20 bg-white">
    <input value={filter} onChange={e => setFilter(e.currentTarget.value)} className="ml-24 shadow my-2 h-8" type="text" placeholder="Name.." />
  </div>
}

export default CampaignsMenu