import React from 'react';
import { Link } from 'react-router-dom'

function DashFiles({ files, filter }) {
    return (
        <div>
            <section>
                {files.filter((files) => {
                    if (filter == "") {
                        return files.subject
                    } else if (files.subject.toLowerCase().includes(filter.toLowerCase())) {
                        return files.subject
                    }
                }).map(filter => {
                    return (
                        <div>
                            <Link to= {`/${filter.subject}`} key= {filter.subject}>
                                <button>{filter.subject}</button>
                            </Link>
                        </div>
                    )
                })
                }
            </section>
        </div>
    );
}

export default DashFiles;