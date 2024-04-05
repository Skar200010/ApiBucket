import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const CodeSnippetViewer = () => {
    const [codeSnippets, setCodeSnippets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [snippetsPerPage] = useState(5); // Adjust the number of snippets per page as needed

    useEffect(() => {
        fetchCodeSnippets();
    }, []);

    const fetchCodeSnippets = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getapicode'); // Replace with the actual endpoint
            const data = response.data;
            console.log('Code snippet data:', data); // Log the response data
    
            if (Array.isArray(data) && data.length > 0) {
                setCodeSnippets(data);
                setLoading(false);
            } else {
                console.error('Invalid code snippet data:', data);
            }
        } catch (error) {
            console.error('Error fetching code snippets:', error);
        }
    };

    // Get current snippets
    const indexOfLastSnippet = currentPage * snippetsPerPage;
    const indexOfFirstSnippet = indexOfLastSnippet - snippetsPerPage;
    const currentSnippets = codeSnippets.slice(indexOfFirstSnippet, indexOfLastSnippet);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Handle search
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const filteredSnippets = currentSnippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p>Loading...</p>; // Show a loading indicator while fetching data
    }

    return (
        <div className='container mx-auto px-4 py-8 ml-12'>
            <input
                type='text'
                placeholder='Search by title...'
                value={searchTerm}
                onChange={handleSearch}
                className='mb-4 px-4 py-2 border rounded-md'
            />
            {filteredSnippets.map((snippet, index) => (
                <div key={index} className='mb-8 ml-20' style={{ width: '70%' }}>
                    <h2 className='text-2xl font-bold mb-4'>{snippet.title}</h2>
                    <p className='mb-4'>{snippet.description}</p>
                    <div className='bg-white rounded-lg shadow-md overflow-hidden' >
                        <ReactQuill
                            
                            value={`<pre><code>${snippet.codeSnippet}</code></pre>`} // Format the code snippet as HTML code
                            readOnly={true}
                            theme="snow"
                            modules={{
                                toolbar: false,
                            }}
                            formats={[
                                'code', // Enable the code format
                            ]}
                        />
                    </div>
                </div>
            ))}
            <nav className='mt-4'>
                <ul className='flex justify-center'>
                    {Array.from({ length: Math.ceil(codeSnippets.length / snippetsPerPage) }, (_, index) => (
                        <li key={index} className='mr-2'>
                            <button onClick={() => paginate(index + 1)} className='px-3 py-1 border rounded-md'>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CodeSnippetViewer;
