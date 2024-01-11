import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import LaunchPieChart from '@/components/PieChart/LaunchPieChart';
import LaunchModal from '@/components/Launches/LaunchModel';
import {
	setEndDate,
	setLaunchType,
	setSelectedLaunch,
	setStartDate,
	setIsModalOpen,
	setFilteredLaunches,
} from '@/redux/reducers/launchReducer';
import { fetchLaunches } from '@/redux/actions/launchActions';
import React from 'react';

const LaunchComp = () => {
	const { data: session } = useSession();
	const dispatch = useDispatch();
	const {
		launches,
		filteredLaunches,
		startDate,
		endDate,
		launchType,
		isModalOpen,
		selectedLaunch,
	} = useSelector((state) => state.launch);

	useEffect(() => {
		dispatch(fetchLaunches());
	}, [dispatch]);

	const handleLaunchTypeChange = (type) => {
		dispatch(setLaunchType(type));
	};

	const successfulLaunches = filteredLaunches.filter((launch) => launch.success).length;
	const failedLaunches = filteredLaunches.filter((launch) => !launch.success).length;
	const totalLaunches = filteredLaunches.length;

	const handleDateFilter = () => {
		if (startDate && endDate) {
			const filteredLaunches = launches.filter((launch) => {
				const launchDate = new Date(launch.date_utc);
				return launchDate >= new Date(startDate) && launchDate <= new Date(endDate);
			});
			dispatch(setFilteredLaunches(filteredLaunches)); // Dispatch the new action here
		} else {
			dispatch(setFilteredLaunches(launches)); // Dispatch the new action here
		}
	};

	const toggleModal = (launch) => {
		dispatch(setIsModalOpen(!isModalOpen));
		dispatch(setSelectedLaunch(launch));
	};

	if (session) {
		return (
			<div className='p-8 w-full h-full'>
				<div className=''>
					<div className='flex gap-8 mb-8 '>
						<h1 className='text-3xl font-bold '>SpaceX Launches</h1>
					</div>
					<div className='p-2 flex flex-row justify-evenly items-center  border-x-2 border-t-2 '>
						<div className='flex flex-row items-center gap-2'>
							<label className=''>Start Date:</label>
							<br />
							<input
								type='date'
								onChange={(e) => dispatch(setStartDate(e.target.value))}
								className='px-2 py-1 rounded-md text-black'
							/>{' '}
							<br />
							<label className=''>End Date:</label>
							<br />
							<input
								type='date'
								onChange={(e) => dispatch(setEndDate(e.target.value))}
								className='px-2 py-1 rounded-md text-black'
							/>{' '}
							<br />
							<br />
							<button
								onClick={handleDateFilter}
								className='px-4 py-2 text-xl hover:border-black hover:bg-white hover:text-black transition slide-in-from-top-0 border-2 border-white '>
								Filter
							</button>
						</div>
						<div className='flex items-center gap-2'>
							<label className=''>Launch Type:</label>
							<label htmlFor='past'>Past</label>
							<input
								id='past'
								type='radio'
								label='Past'
								value='past'
								checked={launchType === 'past'}
								onChange={() => handleLaunchTypeChange('past')}
							/>
							<label htmlFor='upcoming'>UpComing</label>
							<input
								id='upcoming'
								type='radio'
								label='Upcoming'
								value='upcoming'
								checked={launchType === 'upcoming'}
								onChange={() => handleLaunchTypeChange('upcoming')}
								className='mr-2'
							/>
							<label htmlFor='all'>All</label>
							<input
								id='all'
								type='radio'
								label='All'
								value='all'
								checked={launchType === 'all'}
								onChange={() => handleLaunchTypeChange('all')}
								className='mr-2'
							/>
						</div>
					</div>
					<div className='flex flex-row justify-evenly '>

						<div className='w-[85%] lg:flex-row justify-center items-center gap-8'>
							<LaunchPieChart
								totalLaunches={totalLaunches}
								successfulLaunches={successfulLaunches}
								failedLaunches={failedLaunches}
							/>
						</div>
						<div className='w-80 border-y-2 border-r-2'>
							<div className='flex max-h-[492px] overflow-auto'>
								<table className='table-auto'>
									<tr>
										<th className='border-r-2 border-white'>SrNo.</th> <th>Launch</th>
									</tr>
									{filteredLaunches.map((launch, index) => (
										<tr
											className=' border-y-2 border-white hover:bg-white hover:cursor-pointer hover:text-black transition ease-in-out duration-300'
											key={launch.id}
											onClick={() => toggleModal(launch)}>
											<td className='border-r-2 border-white'>{index + 1}</td>
											<td className=''>{launch.name}</td>
										</tr>
									))}
								</table>
							</div>
						</div>
					</div>
				</div>
				{isModalOpen && (
					<LaunchModal
						isModalOpen={isModalOpen}
						selectedLaunch={selectedLaunch}
						toggleModal={toggleModal}
					/>
				)}
			</div>
		);
	}
	return (<>
	<p>Sign In To Continue</p>
	</>)
};

export default LaunchComp;
